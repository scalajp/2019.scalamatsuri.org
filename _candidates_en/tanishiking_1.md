---
name: tanishiking(Rikito Taniguchi)
title: "How we replaced a 10-year-old Perl product using Scala"
length: 40
audience: Intermediate
language: Japanese
twitter: tanishiking
github: tanishiking
icon: https://avatars0.githubusercontent.com/u/9353584?s=460&v=4
organization: Hatena.
tags:
  - Best Practices
  - Software Design and Architecture
  - Microservices
suggestions:
  - People who try to replace your legacy system using Scala.
contributes:
  - scalafmt
  - scalafix
speaker_experience:
  - "<a href='https://speakerdeck.com/tanishiking/format-things-with-scalafmt'>Scala Kansai Summit 2018</a>"
---
Our product Hatena::Bookmark had been running on a 10-year-old Perl system with a huge complicated codebase and legacy architecture, which made us suffer from increasing maintenance costs. We'd started a project to replace the system on 2015 and have finished recently. The codebase and architecture including the database schema are completely replaced. For the implementation of the core application server, we chose Scala, which we think is a language suitable for building a solid system with less complexity. In this session, we explain what were the good parts and the bad parts in the project.

