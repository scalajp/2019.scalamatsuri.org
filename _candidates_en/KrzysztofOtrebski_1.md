---
name: Krzysztof Otrębski
title: "State vs Stateful Actors"
length: 40
audience: Intermediate
language: English
twitter: kotrebski
github: otrebski
icon: /img/candidates/KrzysztofOtrebski.jpg
organization: Ocado Technology / Scala Developer
tags:
  - Functional Programming
  - Best Practices
suggestions:
  - People who started using Akka and looking for inspiration how to move state and business logic out of Akka Actor. This talk is also for someone who want to see FP benefits
contributes:
  - <a href='https://github.com/otrebski/sbt-flaky'>https://github.com/otrebski/sbt-flaky</a>
  - <a href='https://github.com/otros-systems/otroslogviewer'>https://github.com/otros-systems/otroslogviewer</a>
  - <a href='https://plugins.jetbrains.com/plugin/7406-otrosjumptocode'>https://plugins.jetbrains.com/plugin/7406-otrosjumptocode</a>
speaker_experience:
  - San Francisco Scala User Group - <a href='https://www.youtube.com/watch?v=g7LHqcMg6MI'>https://www.youtube.com/watch?v=g7LHqcMg6MI</a>
  - JavaOne
  - Geecon (Cracow) <a href='https://vimeo.com/185781733'>https://vimeo.com/185781733</a>, <a href='https://vimeo.com/131005763'>https://vimeo.com/131005763</a>
---
During this talk I will show you how we can move the logic from actors into a monad state. We will see the benefits of the logic implemented in composable, side-effect-free way.

The talk is based on a project that keeps all of the business logic inside actors. Our goal is to refactor actors into a monad state. The changes will make the application more testable and comprehensible.
