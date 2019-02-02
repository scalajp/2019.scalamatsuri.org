---
name: Alexander Konovalov
title: "Recursion: schemes, algebras, finally tagless, data types. A unifying vision."
length: 90
audience: Intermediate
language: English
twitter: alexknvl
github: alexknvl
icon: https://pbs.twimg.com/profile_images/797920728859480065/sCOPNuwF_400x400.jpg
organization: Compellon, Analytics Engineer
tags:
  - Functional Programming
suggestions:
  - People who want a deeper understanding of recursion schemes, finally tagless encoding, and type theory in general. People who have achieved intermediate understanding of functional programming in Scala, and want to learn more advanced topics.
contributes:
  - I am a contributor and a team member of Scalaz.
speaker_experience:
  - I have presented an academic paper at WWW2017, <a href='https://www.slideshare.net/AlexanderKonovalov13/learning-event-extractors-from-knowledge-base-revisions'>https://www.slideshare.net/AlexanderKonovalov13/learning-event-extractors-from-knowledge-base-revisions</a> and presented <a href='https://alexknvl.com/docs/scalaz_summit_presentation.pdf'>https://alexknvl.com/docs/scalaz_summit_presentation.pdf</a> at Lambdaconf 2018 but in an informal setting during scalaz summit and without much preparation.
---
In this talk I will derive the core ideas behind recursion
schemes and finally tagless encoding starting from scratch.
We will start with a short introduction to type algebra and
isomorphisms. Then we will take simple recursive data types
and explore various `fold`-like operations on them and how we 
can massage them into different forms using isomorphisms: final 
tagless, recursion schemes, `foldMap`-like operations, and direct 
`foldr`-style. We will naturally arrive at the `Recursive` typeclass, 
Boehm-Berarducci encoding of ADTs, catamorphisms and F-algebras.
