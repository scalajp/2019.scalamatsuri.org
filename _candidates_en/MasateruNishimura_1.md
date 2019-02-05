---
name: Masateru Nishimura
title: "The Reactive system on Scala and GCP behind CA DyVE, an ad delivery platform"
length: 40
audience: Intermediate
language: Japanese
twitter: mn_swtl
github: mananan
icon: https://pbs.twimg.com/profile_images/859762077472370689/IoMPJ6Zx_400x400.jpg
organization: CyberAgent, inc
tags:
  - Big Data / Fast Data
  - Best Practices
  - Software Design and Architecture
suggestions:
  - Those who want to understand Reactive Systems concretely
  - Those who are interested in high throughput, low latency system design
contributes:
  -
speaker_experience:
  - ScalaMatsuri 2017
  - AWS Summit Tokyo 2017
---
Ad delivery platforms called Demand-side Platforms (DSPs) should respond to 50k req/s of ad auction, moreover, return within 100ms. "CA DyVE", one of CyberAgent's DSPs, is designed as a Reactive system utilizing the Google Cloud Platform (GCP) to meet the above tough system requirements.

In this session, I will introduce DSPs using figures and Scala code, mainly on the following items:

- Overall architecture of a Reactive system with elasticity and resiliency
- Cloud component selection for comfortable operation and maintenance (GCP case)
- Choosing between OLTP (online transaction processing), streaming, and batch job depending on the use case
- Utilizing techniques such as Circuit Breaker, Throttling, Bulkhead, and CQRS (Command Query Responsibility Segregation) + Event Sourcing
