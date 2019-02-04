---
name: Mitsuhiro Shibuya
title: "Things you'd better know before creating your Scala library"
length: 40
audience: Intermediate
language: Japanese
twitter: m4buya
github: mshibuya
icon: https://avatars1.githubusercontent.com/u/486678?s=400&v=4
organization: "Opt, Inc Data Technology Team Manager"
tags:
  - Best Practices
suggestions:
  - Those who are thinking about making a library, but wondering if they are forgetting about something
  - Those who want to contribute to the open source software, but not sure what to watch out for
contributes:
  - RailsAdmin
  - CarrierWave
  - bigquery-fake-client
speaker_experience:
  - Ichigaya Geek Night
  - SRE Lounge
---
Code reuse is a powerful notion. We don't have to solve problems repeatedly which many predecessors have already solved. A library is a realization of such code reuse, once created libraries need to be maintained properly in order not to annoy users and to keep solving problems.

In this talk, we'll discuss the topics involving library maintenance:

- Supporting multiple versions of Scalas and JDKs
- Versioning
- Binary compatibility
- Java interoperability

which you'd better know to maintain Scala libraries for a long-term.
