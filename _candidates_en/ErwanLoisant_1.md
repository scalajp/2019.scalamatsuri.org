---
name: Erwan Loisant
title: "Concurrency in Scala: Futures, Actors and Monad IO"
length: 40
audience: Intermediate
language: English
twitter: erwan
github: erwan
icon: https://avatars3.githubusercontent.com/u/16061?s=400&u=e1cb72e7c296a1258ef05bef13bc58ee5bf80752
organization: Zendesk
tags:
  - Functional Programming
  - Software Design and Architecture
suggestions:
  - People already familiar with Scala, who would like a better understanding on the different ways to deal with concurreny in Scala, how they compare to each other and which is the best to pick depending on your use case.
contributes:
  - Play Framework (from 2009 to 2014)
speaker_experience:
  - "Here is a talk I did internally, to introduce Scala colleagues: <a href='https://docs.google.com/presentation/d/1lSc6vWVETqnKxYST1159W9nD4mUbVM_edYnfbFwk9Ic'>https://docs.google.com/presentation/d/1lSc6vWVETqnKxYST1159W9nD4mUbVM_edYnfbFwk9Ic</a>"
---
The JVM, and Scala in particular provides several ways to run multiple tasks in parallel. I will detail the main ways to deal with parallelism in Scala: Futures (part of the standard library), actors (using Akka in particular) and more recently several libraries implementing the Monad IO inspired by Haskell (we'll use cats effect as an example).
