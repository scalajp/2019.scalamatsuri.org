---
name: Flavio Brasil
title: "Scala ♥ Graal"
length: 40
audience: Intermediate
language: English
twitter: flaviowbrasil
github: fwbrasil
icon: https://avatars1.githubusercontent.com/u/831175?s=460&v=4
organization: Twitter, Staff Software Engineer
tags:
  - Tools
  - Microservices
  - Others
suggestions:
  - People interested in performance and JIT compilers
contributes:
  - Quill
  - Monadless
  - Trane.io Future and Arrow and others
speaker_experience:
  - LavaOne - Honolulu, 01/2018 “Building a high-performance Future for the JVM” <a href='https://youtu.be/grz4uIi0McI'>https://youtu.be/grz4uIi0McI</a>
  - "Scale by the bay - San Francisco, 11/2017 “Spark Datasets: why they aren't great and what could be done” <a href='https://youtu.be/gIq1zRUE4as'>https://youtu.be/gIq1zRUE4as</a>"
  - ScalaDays - Berlin, 06/2016 “Scylla, Charybdis, and the mystery of Quill” <a href='https://youtu.be/nqSYccoSeio'>https://youtu.be/nqSYccoSeio</a>
---
The #TwitterVMTeam is investing in optimizing the JVM to improve the performance of Scala applications. We've migrated to Graal as the JIT compiler and observed a significant performance improvement. The migration also opened the path to implementing optimizations since its codebase is in Java and more manageable.

This talk will present a few performance challenges of our Scala applications and how the #TwitterVMTeam has been working to address them. It'll cover optimizations for more efficient Future execution and new approaches to deal with the overhead of invokeinterface calls.
