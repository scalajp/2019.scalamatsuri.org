---
name: Alexander Konovalov
title: "Domain Specific Languages in Scala"
length: 90
audience: Intermediate
language: English
twitter: alexknvl
github: alexknvl
icon: https://pbs.twimg.com/profile_images/797920728859480065/sCOPNuwF_400x400.jpg
organization: Compellon, Analytics Engineer
tags:
  - Functional Programming
  - Data Science / Machine Learning
  - Software Design and Architecture
suggestions:
  - People who dabble in functional programming in Scala and who want to get better at writing sophisticated embedded domain specific languages. General and domain-specific library developers.
contributes:
  - I am a contributor and a team member of Scalaz.
speaker_experience:
  - I have presented an academic paper at WWW2017, <a href='https://www.slideshare.net/AlexanderKonovalov13/learning-event-extractors-from-knowledge-base-revisions'>https://www.slideshare.net/AlexanderKonovalov13/learning-event-extractors-from-knowledge-base-revisions</a> and presented <a href='https://alexknvl.com/docs/scalaz_summit_presentation.pdf'>https://alexknvl.com/docs/scalaz_summit_presentation.pdf</a> at Lambdaconf 2018 but in an informal setting during scalaz summit and without much preparation.
---
I will introduce some practical examples of DSLs: 
regular expressions, parser combinators, a tensorflow-like 
language to describe vector & matrix computations. We will
use these examples to discuss some advanced topics in domain 
specific language construction in Scala: 

1. When do you use applicative and monadic style for DSLs?
2. When should your DSL be lazy?
3. How to safely observe sharing (recursive definitions)?
4. How to make your DSL be extensible?
5. How do you use Scala's type system to ensure type safety of a DSL?
