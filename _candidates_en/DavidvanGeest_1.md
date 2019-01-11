---
name: David van Geest
title: "A Gentle, Practical Introduction to Path-Dependent Types"
length: 40
audience: Intermediate
language: English
twitter: DWvanGeest
github: DWvanGeest
icon: https://pbs.twimg.com/profile_images/644247268271349760/53O4TbBI_400x400.jpg
organization: PagerDuty, Inc.
tags:
  - Functional Programming, Intro to Scala
suggestions:
  - Anyone interested in modelling real-world data while maintaining type-safety
  - Anyone curious about path-dependent types
  - Anyone who wants to see production, open-source code that brings it all together
contributes:
  - Arrivals - <a href="https://github.com/PagerDuty/arrivals">https://github.com/PagerDuty/arrivals</a>
speaker_experience:
  - flatMap(Oslo) 2018 - <a href="https://www.youtube.com/watch?v=DRxLFWmvJ8A">https://www.youtube.com/watch?v=DRxLFWmvJ8A</a>
  - Scala Up North 2016 - <a href="https://www.youtube.com/watch?v=-4iaDd2RBSI">https://www.youtube.com/watch?v=-4iaDd2RBSI</a>
---
Consider an HTTP API that responds with different fields based on the type of the input provided. How might you build a type-safe client to interact with this API? Is your code littered with `Option`s? Do you resort to casting?

During this talk, we’ll work through a cleaner, safer solution using Scala’s path-dependent types. Along the way, we’ll learn about related concepts such as abstract type members and dependent method types. While these words might sound intimidating (including to this presenter!), they represent simple concepts useful in solving real-world problems.
