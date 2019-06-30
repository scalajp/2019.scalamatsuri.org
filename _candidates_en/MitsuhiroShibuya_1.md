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
  - Those who are thinking about making a library, but are wondering if they are forgetting something
  - Those who want to contribute to open source software, but are not sure what to watch out for
contributes:
  - RailsAdmin
  - CarrierWave
  - bigquery-fake-client
speaker_experience:
  - Ichigaya Geek Night
  - SRE Lounge
slide_url: https://speakerdeck.com/mshibuya/scalaraiburariwozuo-ruqian-nizhi-tuteokitaimentenansufalsekoto
youtube:
---
Code reuse is a powerful notion. We don't have to repeatedly solve problems which many predecessors have already solved. A library is a realization of such code reuse; once created libraries need to be maintained properly in order to not annoy users and to keep solving problems.

In this talk, we'll discuss topics involving library maintenance:

- Supporting multiple versions of Scalas and JDKs
- Versioning
- Binary compatibility
- Java interoperability

These are things that you'd better know to maintain Scala libraries for the long-term.
