# Clock

* **Inputs - 0:**
* **Outputs: - `** `q`
* **Type:** Dynamic
* **Token:** `$clock`

## Synopsis:

The *Clock* component produces an alternating signal based on a user-provided time interval

## Activate

Activating the component prompts the user for a timeout duration (in ms). The clock will complete an active, and an off
cycle within this timeout.

## Notes

The *Clock* relies on JavaScript `setInterval`, which makes use of the Browser's event loop. Thus it should not be
relied upon, to provide accurate timing, rather is intended for use as a source of alternating signals.

If you need accurate timing, see the [Timeout component](./timeout.md)