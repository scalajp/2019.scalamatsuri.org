---
name: Taro L. Saito
title: "Airframe: A More Scala-Friendly Dependency Injection"
length: 40
audience: Advanced
language: Japanese
twitter: taroleo
github: xerial
icon: https://pbs.twimg.com/profile_images/652040869705461760/eIm1fxaM_400x400.jpg
organization: Ph.D., Principal Engineer at Arm Treasure Data
tags:
  - Tools
  - Best Practices
  - Software Design and Architecture
suggestions:
  - Those who need large-scale programming in Scala
  - Those who are interested in middlewares
  - Those who want to focus on Scala programming
contributes:
  - Airframe
  - MessagePack
  - sbt-sonatype
speaker_experience:
  - "Scala Matsuri: <a href='https://www.slideshare.net/taroleo/presentations'>https://www.slideshare.net/taroleo/presentations</a>"
  - SIGMOD
  - Presto Meetup
---
In Scala, we have various approaches for dependency injection. In this talk, we will explore a more Scala-friendly approach for dependency injection that uses only constructor injection or trait mixin. Airframe is a new dependency injection library for Scala, which enables auto-wiring and lifecycle management of service objects in a concise syntax. We will learn the basic usage of Airframe and how to effectively isolate various concerns in programming (e.g., building and configuring objects, resource management) to simplify your Scala code.
