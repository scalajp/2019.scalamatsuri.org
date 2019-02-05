---
name: Takatomo Torigoe
title: "Ride on random values - test, logging, and tuning"
length: 40
audience: Intermediate
language: Japanese
twitter: piyo7z
github: piyo7
icon: https://www.gravatar.com/avatar/e650d601c28f8accb2eeacca8fc2b092?s=200
organization: CyberAgent, Inc. Data Engineer
tags:
  - Best Practices, Data Science / Machine Learning, Microservices
suggestions:
  - Those who are using random numbers casually
  - Those who do not trust random numbers
  - Those who want to get along with random numbers
contributes:
  - 
speaker_experience:
  - ScalaMatsuri 2018: https://www.slideshare.net/TaokatomoTorigoe/lets-simulate-a-quantum-computer-with-pretty-scala
---
Are you getting along with random numbers?
Random numbers are useful in various situations. However, a few people shy away from them.
Probabilistic programs are actually hard to run unit tests. How would we know the number of times that a die function returns 6 in 100 calls? Even if you tested if the number falls within the range of 10 to 20, it may unfortunately fail.

In this session, I will show Scala code from an advertisement selection microservice build on Finagle, and discuss how to ride on random numbers like rough waves with testing, logging, and tuning.
