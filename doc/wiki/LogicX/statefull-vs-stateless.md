# Stateful vs Stateless Components

LogicX has three main types of components within the app. These are Stateless,
Stateful, and Dynamic components. This document will outline the differences
between them and allow you to better understand the internal workings of LogicX.

All components in LogicX behave in similar ways. They have two fundamental
behaviours, *produce*, and *inform*. Each can be imagined as a stage in a
process of rippling *bits* to-and-fro and transforming them along the way.
However, before any components can communicate with each-other, they need to be
aware of their surroundings. Each component keeps independent lists of
*terminals*, which are lists of other components connected to it. They are
separated into two groups: *Inputs* and *Outputs*. Components labelled *inputs*
are those whose output flows into the component, while *outputs* are those who
receive input from the component.

## Stateless

The most basic type of Component in LogicX is a Stateless one. 
These components contain [Truth Tables](./truth-tables.md), allowing components to look up
and use values without needing to perform expensive or potentially 
[dangerous](../Application/plugin-warnings.md) calculations.
This is advantageous as using and storing these components is very efficient. 
They are referred to as Stateless as they do not track or contain the means to *remember* their state.
