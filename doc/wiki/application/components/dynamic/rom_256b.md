# 256 bit ROM module

* **Inputs - 9:** `Enable` `I0` `I1` `I2` `I3` `I4` `I5` `I6` `I7`
* **Outputs - 8:** `O0` `O1` `O2` `O3` `O4` `O5` `O6` `O7`
* **Type:** Dynamic
* **Token:** `$rom_256b`

## Synopsis:

Member of a larger family of ROM devices. Provides a bitwise signal of a binary file stored on disk.
8 Bit ROM chip holds 64 bytes of ROM

## Activate

Activating the *ROM* component prompts the user to open a binary file. The contents of the fire are unimportant, as they
are read as binary and interpreted as a numeric sequence regardless of datatype.

## Notes

*Output*s are used throughout LogicX in the same way that *Input*s are. They are vitally important to understanding the
flow and structure of components.