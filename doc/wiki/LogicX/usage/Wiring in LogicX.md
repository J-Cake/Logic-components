# Wiring

Constructing functionality in LogicX is achieved by linking components together such that outputs can feed into inputs
and be transformed into useful information. To do this, components can send signals along wires to their destination.

## Connecting Components

To link components, the Wire tool needs to be selected in *place* mode. Do this through the key combination `4-2` or by
clicking the Wire icon (<icon></icon>), and selecting *place*.

![The dashes turn blue](/res/wiring-1.png) Components can now be linked together by selecting the terminals of
components. These are little dashes coming off the components. In *place* mode, these will turn blue on hover.

![Click on the other component to link](/res/wiring-2.png) To connect to another component, simply click on the
terminals of the other component.

> It is worth noting that inputs must be connected to outputs and attempting to connect inputs to inputs or outputs to 
> outputs will fail.

![Wires with some nodes](/res/wiring-nodes.png) Wires can also have 0 or more *nodes*. These are handles along a wire
that allow the wire to bend and produce splines as desired. Nodes can also act as terminals for other wires, and
attempting to connect components to/from nodes, rather than terminals is supported. These are also created in *place*
mode, by clicking on a wire segment.

![Wires with nodes](/res/wiring-nodes-2.png) Create nodes by clicking on the grid between the connected components. You
will see a visualisation of the wire as you place more nodes. Alternatively, if you need to add nodes after the wire has
been created, simply click on a segment. It will turn red to indicate the segment being modified.

## Dropping Connections

Sometimes, components are connected mistakenly, or in need of reconfiguring. In this case, disconnecting components is
easy. On the wire tool (<icon></icon>), select the *delete* mode. You can use the key combination `4-3` if you prefer.

![Delete Wire](/res/wiring-delete-wire.png)When you click on a wire's segments, you will be prompted to delete the
entire wire. If you choose *yes* or the equivalent option, the components will now be disconnected. It is also worth
noting that this does not affect any other wires. Thus having two connections to/from the same component, this operation
only removes the selected wire.

## Moving and Selecting

The other two options are important, but not overly difficult to grasp. The Move mode, accessible through `4-1`, allows
wire nodes to be moved the same way components are. Similarly, the Select mode (`4-4`) marks the nodes as selected,
where deleting and moving them is also the same as components.