---
name: blast-hardchese
title: "Principled Code Generation with Guardrail"
length: 40
audience: Intermediate
language: English
twitter: blast_hardchese
github: blast-hardcheese
icon: https://avatars1.githubusercontent.com/u/278900?s=256&v=4
organization: Twilio, Sr. SWE
tags:
  - Functional Programming
  - Tools
  - Microservices
suggestions:
  - HTTP developers
contributes:
  - guardrail
  - dhall-terraform
speaker_experience:
  - "ScalaMatsuri: <a href='https://youtu.be/ONlBglP8H3Y'>https://youtu.be/ONlBglP8H3Y</a>"
  - "Haskell Meetup: <a href='https://youtu.be/d36y3NYmxH8'>https://youtu.be/d36y3NYmxH8</a>"
  - "Lambdaconf: <a href='https://youtu.be/qBU7u1Qa1fo'>https://youtu.be/qBU7u1Qa1fo</a>"
---
Design principles are important. Documentation is important.

As companies grow, as teams become distributed, it becomes difficult to coordinate expectations between teams. You can coordinate via tools like swagger, a specification language for HTTP services. However, specifications can become incorrect as features change, or they can be incorrectly constructed from the beginning, leaving the consumer to discover the mistake. By generating principled code from the specification, we can leverage the typesystem to write better software. If your documentation is wrong, your code doesn't compile.
