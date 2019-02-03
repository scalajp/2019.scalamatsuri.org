---
name: Changlin Li
title: "Low-commitment vs high-commitment abstractions (or protect your control flow!)"
length: 10
audience: Beginner
language: English
twitter: 
github: changlinli
icon: https://f001.backblazeb2.com/file/Grabbag/profile_small.jpg
organization: 
tags:
  - Best Practices
  - Software Design and Architecture
suggestions:
  - Working programmers of all stripes looking to understand the mental cost of abstractions better
contributes:
  - 
speaker_experience:
  - Northeast Scala 2018 (Moving Beyond Defensive Programming) (<a href="https://github.com/changlinli/types_presentation_slides">slides</a>, <a href-"https://www.youtube.com/watch?v=Csj3lzsr0_I">video</a>)
---
Whether on the object-oriented or functional side of Scala, we've all had the unpleasant experience of dealing with overly rigid, infectious abstractions that make code hard to understand and modify.

In this talk I'll present one rule of thumb that separates low-cost, easy-to-unwind abstractions vs high-commitment abstractions, namely whether the abstraction affects the control flow of your code.

We'll go over how to avoid prematurely committing to abstractions that affect your control flow and when to know whether a high-commitment abstraction is worth it.
