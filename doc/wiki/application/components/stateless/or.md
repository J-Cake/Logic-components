# OR-Gate

* **Inputs - 2:** `0` `1`
* **Outputs - 1:** `o`
* **Type:** Stateless
* **Token:** `$or`

## Synopsis: 
The *Or* gate produces an output only when **either** of its inputs are active.

## Truth Table
| Input A | Input B | Output |
|---------|---------|--------|
| Off     | Off     | Off    |
| Active  | Off     | Active |
| Off     | Active  | Active |
| Active  | Active  | Active |