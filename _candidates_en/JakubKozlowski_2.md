---
name: Jakub Kozłowski
title: "A server is just a function: an introduction to http4s"
length: 40
audience: Intermediate
language: English
twitter: kubukoz
github: kubukoz
icon: https://blog.kubukoz.com/assets/images/kubukoz.jpg
organization: Ocado Technology, Software engineer
tags:
  - Functional Programming, Tools, Microservices
suggestions:
  - Scala programmers who want to learn about a library for modern, runtime-safe HTTP services.
contributes:
  - I contribute to cats, console4cats and fs2.
speaker_experience:
  - I spoke at multiple international Scala events (flatMap(Oslo), Scala Matsuri 2018, ScalaUA, Scala.IO, BeeScala, LX Scala, and more), as well as a few meetups. 
  - "Here's a video from flatMap: https://www.youtube.com/watch?v=HMs_F7LXTak"
---
If you're going to write a modern web service, you have a wide range of frameworks and libraries to choose from. One of them is http4s, a functional library for writing HTTP services and clients in Scala. I'm going to show you why you should consider it for your next application, for reasons including but not limited to:
- type-safe request/response models that are uniform between client and server
- resource-safe servers, response/request bodies, and streaming
- framework-agnostic testing.
