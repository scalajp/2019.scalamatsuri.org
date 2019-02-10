---
name: negokaz
title: "Using Akka Cluster for a payment service"
length: 40
audience: Intermediate
language: Japanese
twitter: negokaz
github: negokaz
icon: https://ja.gravatar.com/userimage/87654102/07f50e78341431797945bea715291ebe.jpg?size=200
organization: TIS, Inc
tags:
  - Software Design and Architecture
suggestions:
  - Those who want to start using Akka Cluster
  - Those who are interested in actor model
contributes:
  - 
speaker_experience:
  - "ScalaMatsuri 2016: <a href='https://www.slideshare.net/kazukinegoro5/akka-streams-100-scalamatsuri'>https://www.slideshare.net/kazukinegoro5/akka-streams-100-scalamatsuri</a>"
  - "Reactive System Meetup in Nishishinjuku: <a href='https://www.slideshare.net/negokaz/lagom-reactive-microservices-architecture'>https://www.slideshare.net/negokaz/lagom-reactive-microservices-architecture</a>"
---
We have released a payment transaction service adopting Akka Cluster. In this case study, I would like to discuss lessons learned from developing with Akka Cluster. I will describe how we migrated from a traditional CRUD (Create, Read, Update, Delete) -based system using a relational database to a model using actor model and Event Sourcing / CQRS (Command Query Responsibility Segregation) based on this project.
