# Building LogicX

LogicX is a project of decent size, but nothing extreme. It requires a simple set of tools, consisting mostly of
standard build-chain tools.

## Notes:

* This document uses the `$` and `#` notations to signify access-levels in CLI shells.
  `$` represents a shell with user-level access, while a `#` represents a command executed under the root user, **or**
  with `sudo`. (Under Administrator terminal for Windows systems)
* This document uses the `pnpm` package manager for cleanliness reasons, as the utility is more lightweight and produces
  less output than npm, note however that their syntax is interchangeable.

## Prerequisites

* [NodeJS](https://nodejs.org) > 14.0
* [NPM](https://npmjs.com) (Any package manager capable of building native modules works also)
* [SQLite3](https://npmjs.com/package/sqlite3) *Deprecated*
* [PostgreSQL](https://www.postgresql.org/) [See installation notes](#PostgreSQL)
* [Git](https://git-scm.com) (or any GUI/CLI client capable of cloning repositories)
* Any directory with full write access (execute access is optional, but recommended)

### SQLite3

From personal experience, SQLite3 can be tedious to initialise, configure and generally get running stably, but a simple
thing to note is that for linux systems, the installation can be heavily simplified with a package from the
repositories.

1) ```# apt-get install sqlite3```

### PostgreSQL

* Postgres is a highly versatile and powerful database system and requires equally many system resources. As a
  recommendation, do not attempt to use Postgres on systems with less than 2GB of RAM as otherwise, space to run the
  server application will be scarce
* It is also recommended having network / root access to the database, should anything go wrong or in need of updating.
* Be warned when granting network access as this exposes the database to potentially dangerous attack vectors such as
  unknown users making login attempts or DOSing the system.

### Clone the code

To get started, it is a good idea to clone the repository first, that way, updates can be synchronised easily with local
versions. Of course, if you do not wish to obtain version updates, this step can be replaced by simply downloading a
zipped version of the repository from [GitHub](https://github.com/J-Cake/Logic/)

1) ```$ cd ~/<some accessible folder>```
2) ```$ git clone https://github.com/J-Cake/Logic --recursive```
3) ```$ cd ./Logic```

## Building

Once the repository has been cloned, the project dependencies can be installed. This is done through the package
manager. Ensure the following commands are executed from within the project.

> Each command **must** be executed from the project root as the build script uses the PWD as reference to output files
>

1) ```# pnpm install``` (This requires sudo as the binding libraries for BCrypt, SQLite3 and PG require it for building)
2) ```# pnpm install typescript -g```
3) ```$ pnpx tsc```
4) ```$ node ./bin/build```
5) ```$ node ./bin/configuredb.js``` (This is required for configuring an unconfigured SQLite Database. This will not work when using Postgres. [See DB Config section](#database))
6) Set environment variables for Postgres login. [Read More](https://node-postgres.com/features/connecting)
    - `PGUSER`
    - `PGHOST`
    - `PGPASSWORD`
    - `PGDATABASE`
    - `PGPORT` (Use if not default)
7) ```$ node ./build/app/server/index.js --port=2560```
8) Go to [http://localhost:2560](http://localhost:2560) to view the project.

### Conveniences

The build script is capable of building smaller components at a time. For instance, the main application can be built
separately from the componentMenu This is done by passing the `--components` flag a comma-separated list of components.

If you do not want to build any modules, and instead only updated static files, this can be accounted for, by passing
the `--static` flag to the build script.

The server can also be bundled, although this is only necessary in situations where the application needs embedding or
to take up as little space as possible. This is done by passing `--components=server` the same way as before.

By passing the `--dev` option to the build script, the application modules are built in development mode, enabling
source-maps, and disabling minification.

Similarly, through the `--dev` option to the server (`/build/server/index.js`), the server starts in development mode,
allowing for live-reloading with an HTTP request to [/api/reload-local](http://localhost:2560/api/reload-local)
*This is deprecated since the latest refactor*

## Database

Configuring the database is easy enough, just ensure that it is configured correctly with sufficient, but not too generous user access.

To replicate the Database configuration used for [LogicX](https://logicx.jschneiderprojects.com.au/), 
the database is configured to whitelist a single IP address, which is updated daily via an SSH session to be the public 
IP of my development machine. The data structures stored in the databases change regularly, hence it is recommended to have access of some sort.

To enable TCP access, edit `/etc/postgresql/10/main/postgresql.conf` (you will need SUDO-access for this)
For an unchanged config file, remove the `#` from line 59 (listen_addresses).
For the time-being, replace the value in the quotes with an asterisk (*). 
This can be edited with a script to allow access to specific IPs which I will not post here for security reasons.

Save and exit the editor.

Edit the file `/etc/postgresql/10/main/pg_hba.conf` (you will also need SUDO-access for this).
Insert the following lines into the file:
```
host    all      all              0.0.0.0/0                    md5
host    all      all              ::/0                         md5
```
Save and exit.

Restart the postgresql server.

```
# systemctl systemctl restart postgresql
```

> **Warning:** This configuration is dangerous. It exposes the database to the server's TCP interface, allowing any user to attempt to connect to the database.
> Granted, they will still need the password to make changes, but be warned that there is now a missing layer of security protecting the database.
> 
> You should only ever grant TCP-access for development purposes and ensure that the `HOSTS` option only allows **trusted** parties.

### Layout

The database is almost identical in layout to the SQLite equivalent, however uses some Postgres features for efficiency and reusability reasons.
* Instead of the `text` datatype, use the `citext` type for emails and usernames
* Use the [`serial`](http://sqlines.com/postgresql/datatypes/serial) datatype for `~ID` columns

The included `/bin/init-psql.sql` file initialises the PostgreSQL database. 
With the changes mentioned above, this config will correctly configure the SQLite database for use in LogicX
