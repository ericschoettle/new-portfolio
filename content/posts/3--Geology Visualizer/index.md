---
title: Strike and Dip to the Masses
category: "Visualization"
cover: geology.png
author: Eric Schoettle
---

[geology](http://ec2-18-188-140-76.us-east-2.compute.amazonaws.com/application1/app1.html)

## Why

Before I discovered the joys of programming, I induleged in the joys of geology. And they are many. One challenge I encountered in grad school, though, was teaching students about a thing called strike and dip. When mapping geology, you often want to record the orientation of some planar feature in space (a fault plane, the surface between two beds of rock). But rather than using, say, a vector normal to the plane, geologists use numbers we can get directly from two analog tools: a compass and an inclinometer. 

The 'strike' is given by the compass heading of a horizontal line on the plane being measured; the dip is the inclination of the steepest line on the plane (which, by definition, is perpendicular to the line of strike). Tricky to visualize? Yeah, that's why I made this little tool!

## What

I used three.js to build a cube of layered rock, and trained three cameras at it. One gives a block-diagram view, another a map view, another a cross-section view. The user can use the menu to see either the whole of the beds or just the surfaces between them, and can change stike and dip and see it change in real time. 

## What's next?

So much! 

* In block-diagram view, I'd like to have the option to remove the top layers and add in visualizations for strike and dip. For strike, it's a mostly transparent horizontal plane, with the line of strike on the intersection of the horizontal plane and the surface of a bed of rock. For dip, it's a mostly transparent vertical plane in the direction of strike, showing the angle between two lines in the plane - the intersection with the horizontal plane, adn the intersection with the rock surface. 
* Also in block-diagram view, I have (turned off) the ability for the user to spin the camera around with their mouse, but the effect is disorienting - fixed indicators for up, down, north, south, east and west would make it legible (and pretty cool). Alternatively, clicking and dragging could change the orientation of the rocks within a fixed view. 
* In map view, drawing an oriented strike and dip symbol, with the appropriate number for dip.
* The ability to change the cross section orientation, and draw the cross section line on the block diagram/map view. This would also open up the opportunity to make a diagram showing apparent dip vs. actual dop. 
* Basic structure, rather than flat beds - a syncline, an anticline, an overturned fold, (lots of strike and dip symbols on the map!), a fault plane with offset. 
* Surface topography. This goes really well with adding structure, as it shows the rule of V's, etc. But at this point it's a full block-diagram tool, and that's a project for another day. 

