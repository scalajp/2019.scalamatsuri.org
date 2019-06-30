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
  - Tools
  - Best Practices
suggestions:
  - Those who are interested in getting performance out of Scala
contributes:
  - 
speaker_experience:
  - <a href="https://speakerdeck.com/hiroki6/strategy-for-concurrency-and-parallel-by-scala">Scala Kansai summit 2018</a>
  - '<a href="https://speakerdeck.com/hiroki6/gae-bq-load-strategy">bq_sushi #7</a>'
slide_url: https://speakerdeck.com/hiroki6/high-performance-scala
youtube:
---
Scala is said to have good performance because it runs on Java Virtual Machine (JVM).
But, like any other languages, I suspect many of you have had performance issues during actual development.

There are many issues to keep in mind to develop a high performance Scala application; to name a few:

- Avoid full garbage collection (GC)
- Blocking calls for database access
- Scala specific way of writing code, etc


In this session, we will start with profiling methods to measure performance, then go over ways to write Scala to remove  bottlenecks, non-blocking processing, and parallel processing.
