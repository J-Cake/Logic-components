# Common issue you may be experiencing

### The app gets stuck on the loading screen forever

If when attempting to edit a circuit, you run into a situation, where LogicX shows the loading screen for a very long
time, check to ensure you are using LogicX under its home domain name (https://logicx.jschneiderprojects.com.au). LogicX
does not work under IP-based addresses such as http://127.0.0.1 as the api server required for LogicX uses a subdomain (
api), which is not accessible through an IP address. If you are using Linux, by editing the `/etc/hosts` file, you can
add an alias for the IP. You'll need to add one for both `<app>` and `api.<app>`, where `<app>` is replaced by the *
domain* by which you access LogicX.