---
name: Hiroki Komurasaki
title: "Pure domain model, and the technology behind it"
length: 40
audience: Intermediate
language: Japanese
twitter: petitviolet
github: petitviolet
icon: https://pbs.twimg.com/profile_images/494667173453766656/oOXOl8Bw_400x400.jpeg
organization: Fringe81, Inc.
tags:
  - Functional Programming
  - Best Practices
suggestions:
  - Those who want to venture into Domain Driven Design
  - Those who want to use functional programming at work
contributes:
  - 
speaker_experience:
  - <a href="https://speakerdeck.com/petitviolet/scala-performance-tips-scalamatsuri2017">ScalaMatsuri2017</a>
  - <a href="https://speakerdeck.com/petitviolet/meta-programming-scala">Scala Kansai summit 2017</a>
  - <a href="https://speakerdeck.com/petitviolet/real-world-graphql-on-scala">Scala Kansai summit 2018</a>
slide_url: https://speakerdeck.com/petitviolet/pure-domain-model-and-the-technology-behind-it
youtube:
---
Domain Driven Design (DDD) has been drawing people's attention; however, when implementing DDD in Scala, it's often difficult to keep the implementation concerns apart from the domain model. ExecutionContext for asynchronous processing and transaction information for database connections are some of the examples we might wish to keep out of the domain model.

In this session, we will solve this problem drawing from the rich language features of Scala and the power of functional programming.
More concretely, we will use web application as an example, and combine Domain Driven Design with Layered Architecture in a way such that the domain layer is abstracted as a pure interface.
Reference: <https://fringeneer.hatenablog.com/entry/2018/11/01/100531>
