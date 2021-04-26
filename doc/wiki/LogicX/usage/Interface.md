# Getting to know the interface

Below is a reference of shortcuts, buttons and symbols to familiarise you with the LogicX Interface

## Application

| Tool       | Icon           | Shortcut                   | Description |
| ---------- | -------------- | -------------------------- | ----------- |
| Pointer    | <icon></icon> | `1`, `p`                   | Interacts with components by triggering updates.                        |
| Select     | <icon></icon> | `2`, `b`                   | Selects components and wire nodes.                                      |
| Move       | <icon></icon> | `3`, `g`                   | Allows wire nodes and components to be moved around.                    |
| Wire       | <icon></icon> | `4`, `w`                   | Connects and links components.                                          |
| Debug      | <icon></icon> | `5`, `d`                   | Mark components to halt on when they receive certain update conditions. |
| Label      | <icon></icon> | `6`, `l`                   | Change component identifiers for use in simulation.                    |
| Delete     | <icon></icon> | `delete`, `backspace`, `7` | Disconnects components and removes them from the document              |
| Components | <icon></icon> | `F9`, `8`                  | Add components to the document                                         |
| Import     | <icon></icon> | `F10`, `9`                 | Convert documents into components, for use in the document.            |
| Undo       | <icon></icon> | `ctrl+z`                   | Undoes the previous action |
| Redo       | <icon></icon> | `ctrl+y`                   | Redoes the previously undone action |
| Save       | <icon></icon> | `ctrl+s`                   | Saves the document |
| Back       | <icon></icon> | `esc`                      | Returns to the Dashboard |
| Flip       | <icon></icon> | `up`, `down`               | Flip all selected components |
| Rotate-CCW | <icon></icon> | `left`                     | Rotate all selected components counter-clockwise about their own axis |
| Rotate-CW  | <icon></icon> | `right`                    | Rotate all selected components clockwise about their own axis |
| Cut        | <icon></icon> | `ctrl+x                   `| Moves all selected components from the document, into the clipboard |
| Copy       | <icon></icon> | `ctrl+c`                   | Copies all selected components from the document, into the clipboard |
| Paste      | <icon></icon> | `ctrl+v`                   | Pastes all components on the clipboard into the document |
| Resume     | <icon></icon> | `tab`, `F2`                | Resumes the component chain as normal |
| Step       | <icon></icon> | `enter`, `F3`              | Advances component chain to component ahead |


## Dashboard

| Action | Icon | Description |
| ------ | ---- | ----------- |
| Make Document | <icon></icon> | Creates a new document |
| **Yours** |  | Shows list of documents you own |
| Sharing Options | <icon></icon> | Control access and visibility of your document |
| Rename Document | <icon></icon> | Defines a new name for the document |
| Delete Document | <icon></icon> | Deletes the document |
| **Shared with you** |  | Shows list of documents you do not own, but have read or read/write access to |
| Leave Document | <icon></icon> | Removes your access to the document |
| **Your Components** |  | Shows list of components you have created or used in any of your or shared documents |
| Delete Component \* | <icon></icon> | Removes the component from your list |
| View Component | <icon></icon> | Opens a dedicated viewer for the component |

> \* **Note:** Deleting a component that yours or other documents depend on, will cause these documents to stop working. For this reason, components are **never** deleted, instead hidden.

## Share Panel

| Action | Icon | Description |
| ------ | ---- | ----------- |
| Username or Email Address |  | Find a user by username or email address |
| Can Edit | <icon></icon> | Allow the user to make changes to the document |
| Revoke access | <icon></icon> | Remove all access to this user |

## Component Menu

| Action | Icon | Description |
| ------ | ---- | ----------- |
| *Component Name* |  | Add the component to the document |
| Info | <icon></icon> | View the documentation for that component\* |
| Remove Component | <icon></icon> | Remove the component from the document\*\* |

* \* If the component has provided documentation (usually only plugin (dynamic) components have this), this will be returned, otherwise, it will be generated.
* \*\* This does not remove all components of this type from the document, instead removes the option to add more of this type. This also does not mean that the component type cannot be added later. 


## Component Finder

| Action | Icon | Description |
| ------ | ---- | ----------- |
| Convert Documents | <icon></icon> | Show a list of your documents that you can convert into components |
| Component Name |  | The name or token of the component to search for |
| Search | <icon></icon> | Search for the component |

## Document Converter

| Action | Icon | Description |
| ------ | ---- | ----------- |
| Back | <icon></icon> | Returns to the component list |
| Import as stateful component |  | Should the component be imported as a [Stateful or Stateless](/wiki/%2FLogicX%2Fstatefull-vs-stateless.md) component |
| *Document* |  | Selects the document |
| Import |  | Initiates conversion |

## Settings

| Setting | Description |
| ------- | ----------- |
| Show Tooltips | Enable or disable the tooltips used to show information about components in the editor |
| Colourise Components | Gives components a unique colour for their component type |
| Trackpad Gestures <icon style="color: var(--danger)"></icon> | **Experimental!** Provides interoperability between touchscreen based devices and laptop trackpads |
| Grid Size | Defines how large the grid cells are |
| Grid | Toggle the grid |
| Theme | Sets the theme for the application |