---
name: Zahari Dichev
title: "Backpressure over the wire - when things go wrong"
length: 40
audience: Advanced
language: English
twitter: zaharidichev
github: zaharidichev
icon: https://avatars1.githubusercontent.com/u/4391506?s=400&v=4
organization: 
tags:
  - Big Data / Fast Data
  - Functional Programming
  - Best Practices
  - Software Design and Architecture
  - Microservices
suggestions:
  - developers wanting to understand the principles of backpressure
  - distributed systems developers
  - scala entusiasts
  - companies relying on products such as Kafka, Rabbit and Akka
contributes:
  - Akka
  - Alpakka
speaker_experience:
  - Scala Days 2018
  - Local meetups
---
Frequent bursts of high load bring the need for today’s systems to be engineered for stability and elasticity. One aspect of designing reliable and scalable systems is backpressure. In this lecture we will take a look at how Kafka, RabbiMq and Akka achieve that and point out some of the problems that have recently been fixed in these products. We will conclude with an overview of StreamRefs - a great new way to bring backpressured streams over network boundaries. Expect deep dives into the internals of Akka Streams, protocols such as TCP and AMQP, lots of code examples and a great deal of fun.