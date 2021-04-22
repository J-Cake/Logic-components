# Wiring

Constructing functionality in LogicX is achieved by linking components together such that outputs can feed into inputs and be transformed into useful information. To do this, components can send signals along wires to their destination. 

## Connecting Components 

To link components, the Wire tool needs to be selected in *place* mode. Do this through the key combination `4-2` or by clicking the Wire icon <icon></icon>, and selecting *place*. 

Components can now be linked together by selecting the terminals of components. These are little dashes coming off the components. In *place* mode, these will turn blue on hover.

To connect to another component, simply click on the terminals of the other component. It is worth noting that inputs must be connected to outputs and attempting to connect inputs to inputs or outputs to outputs will fail. 

Wires can also have 0 or more *nodes*. These are handles along a wire that allow the wire to bend and produce splines as desired. Nodes can also act as terminals for other wires, and attempting to connect components to/from nodes, rather than terminals is supported. These are also created in *place* mode, by clicking on a wire segment. 
