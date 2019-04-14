---
title: Experience
---


## Pavia Systems

One of my favorite projects was for a company called Pavia Systems, expanding and revamping their suite of tools for civil engineers desiging roads. The site wasn't the most modern - backbone.js as framework and handlebars for templating - but refactoring and modernizing was an excellent lesson in product architecture.

I got the opportunity to revamp much of the UI and to add a lifecycle cost analysis tool. This was great fun; I got to learn all about the road planning and construction process, modeling of traffic, inflation, growth in costs and vehicle miles traveled, and other such technical domain knowledge, and then apply it to giving the user a greatly simplified flow and sophisiticated mathematical checks. 

The other rewarding part of the project was digging into d3.js to help the user visualize the relevant data. For instance, we realized that the rather complicated form we had for a road maintnence schedule was built on the assumption that the schedule was already made, and being copy-pasted in. I shifted it to a tool for actually creating that schedule by using d3 to make an interactive timeline that enforced (or alerted, depending on the problem) the necessary relationships between elements on the timeline. 

Later with Pavia I was able to work on a data integration that was essential to their business plan, connecing our API to our client's PL/SQl database with a nodeJS process. This was quite a challenge, from the inital task of understanding what was in their database and its web of dependencies, to creating a hashing scheme to allow bi-directional data transfer even with low time-resolution on their end, to varioius bugs when the integration service interacted with other asynchronous processes. 

In addition to piles of javascropt, I got to write quite a bit of SQL, including some fairly complex stored procedures the client wanted as a failsafe for data integrity. We made extensive use of the async amd moment libraries, and the whole package was wrapped in a docker container.  



