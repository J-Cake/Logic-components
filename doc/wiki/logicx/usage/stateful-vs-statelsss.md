# LogicX's Component Types.

LogicX uses a component architecture to pipe and manipulate inputs dynamically. For this to work, Components must
translate a set of inputs to a set of outputs. There are various ways to do this and LogicX natively supports Stateless,
Stateful and Dynamic components. Each have their own set of functions, pros and cons. Understanding the difference
between them is integral to using LogicX most efficiently. For brevity, the difference between the different types lies
in the way in which inputs are translated to a set of outputs.

## Stateless

Translating inputs to outputs is most effectively done through a standard table. The table includes two groups of
columns, the first is the list of inputs, the second is the resulting outputs. Consider the following example of an AND
gate.

| A | B | **X** |
|---|---|-------|
| False | False | False |
| False | True | False |
| True | False | False |
| True | True | True |

The disadvantage of this setup is that the component has no state. Meaning previous inputs have no impact on the current
output. In many cases this is optimum as components need to behave the same way each time. A further advantage of this
setup is its sheer speed. Most setups for handing such mappings spend valuable computation time interpreting the inputs,
however, a table output simply outputs the value. These tables are also incredibly reliable, as each set of inputs is
unique, giving the same output each time.

## Stateful

Stateful components are in some sense opposite to stateless (if the name isn't a clue enough). The biggest difference
between the two is that stateful components have the ability to use the previous input as part of their output. Stateful
components achieve this without the use of tables. Instead, when generating them, the document they come from is simply
embedded within the component itself. When using such components, the component passes its inputs through its internal
document, giving back the document's outputs as its own.

The best way to visualise this is with an example. Consider the circuit for an SR-Latch.

<iframe src="/view/793eq8zu1ks0"></iframe>

You will notice that by clicking on the `set` input, the output goes high. Selecting it a second time, makes no
difference. Notice how the output for the first time is *different* to the second time. This is the power of stateful
components.

## Dynamic

The final type of component is a dynamic one. These are fundamentally different from either type, as they are not
controlled by an internal data structure. They rely on a script to produce an output based on its input. This means that
dynamic components can interact with the user external to LogicX. All interaction with the user is achieved through
dynamic components as these are the only way to interface with mice and keyboard actions.

Further, dynamic components are not restricted to passing inputs to outputs. They can cause chain updates arbitrarily,
based on actions defined within the script. For instance, the standard `clock` component achieves its pulsing behaviour
through JavaScript's `setInterval` function.  