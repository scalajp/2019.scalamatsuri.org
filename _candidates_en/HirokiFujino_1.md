---
name: Hiroki Fujino
title: "High Performance Scala"
length: 40
audience: Intermediate
language: Japanese
twitter: Fhiroki1
github: Hiroki6
icon: https://ja.gravatar.com/userimage/143452083/fb459a2afdf9f0f9fc2fe015a8f1c22b.jpeg
organization: Fringe81, Inc
tags:
  - Tools, Best Practices
suggestions:
  - Those who are interested in getting performance out of Scala
contributes:
  - 
speaker_experience:
  - 
---
Scala is said to have good performance because it runs on Java Virtual Machine (JVM).
But, like any other languages, I suspect many of you have had performance issues during actual development.

There are many issues to keep in mind to develop a high performance Scala application.
- Avoid full garbage collection (GC)
- Blocking calls for database access
- Scala specific way of writing code, etc

are some of the topics, to name a few.

In this session, we will start with profiling methods to measure performance; and go over ways to write Scala to remove the bottleneck, non-blocking processing, and parallel processing.
