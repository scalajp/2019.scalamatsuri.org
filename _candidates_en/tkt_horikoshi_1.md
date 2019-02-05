---
name: tkt_horikoshi
title: "Considerate asynchronous programming with Monix"
length: 40
audience: Beginner
language: Japanese
twitter: tkt_horikoshi
github: takat0-h0rikosh1
icon: https://avatars0.githubusercontent.com/u/17715952?s=460&v=4
organization: Septeni Original Developer
tags:
  - Functional Programming
  - Best Practices
suggestions:
  - Those who implement asynchronous programming in Scala
  - Those who want to optimize asynchronous programming
  - Those who are interested in Monix
contributes:
  - 
speaker_experience:
  - Scala Kansai summit 2018 <a href='https://gitpitch.com/takat0-h0rikosh1/circe-codec-presentation/master?grs=github&t=beige'>https://gitpitch.com/takat0-h0rikosh1/circe-codec-presentation/master?grs=github&t=beige</a>
---
We deal with online ads at work; for large-scale data acquisition we often see batch application that makes frequent requests to a third-party API. In these batch applications, asynchronous programming is unavoidable. However, there are many things to consider such as API request quotas, thread state management, etc and it is not easy.

In this talk, I will feature a Scala library for asynchronous programming called Monix. I will discuss efficient asynchronous processing, thread-safe parallel processing approaches, and the implementation patterns that are considerate to third-party APIs.
