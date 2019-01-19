---
name: Guillem Iscla
title: "Scala Future is great. How can I do better?"
length: 40
audience: Intermediate
language: English
twitter: 
github: GuillemIscla
icon: https://avatars2.githubusercontent.com/u/5903579?s=400&u=d0b10e605d963ad16172e530e87f7dae3e1c9ecc&v=4
organization: SUGAR Inc
tags:
  - Tools
  - Best Practices
  - Intro to Scala
suggestions:
  - Anyone who uses concurrency in Scala and has interests on how it works or some tools for managing it
contributes:
  - 
speaker_experience:
  - 
---
First approach for everyone in concurrency in Scala is Futures and you can like them enough to stay here for a while.  
Now, concurrency can easily put yourself into trouble when you exhaust all your threads and suddenly want more control over your thread pool. On the other hand you might want your tasks to run sequentially or throttle them. Or maybe you know you can handle failures in your threads but also feel there are nicer ways to do it.  
In this talk we see some of excellent tools in Scala to manage these and other problems you might have.