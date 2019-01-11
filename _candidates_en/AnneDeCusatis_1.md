---
name: Anne DeCusatis
title: "Tips from writing my first Scala macro"
length: 40
audience: Intermediate
language: English
twitter: twitter.com/precisememory
github: github.com/anne-decusatis
icon: https://media.licdn.com/dms/image/C5603AQEZIF4ahePETg/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=NHxc6rbp2xhwZyUFDvAVa5I45LoNJFrvxUVyMbh6m70
organization: Data Engineer, Spotify
tags:
  - Tools
  - Intro to Scala
suggestions:
  - People who know a lot about Scala macros and want to see where documentation and APIs can be improved for newcomers
  - People who want to write libraries to transform code, and would like to know if macros are a good solution
  - People who would like to avoid common mistakes when writing a macro
contributes:
  - 
speaker_experience:
  - "'A Pop Punk Introduction to Scala', presented at local meetup (no recording), blog post with slides: https://anne.loves.technology/blog/talks/2018/02/07/queensjs.html"
  - "'More than Binary: Inclusive Gender Collection and You', video (PyCon 2016): https://www.youtube.com/watch?v=iW8ikFrUWPQ, blog post with slides: https://anne.loves.technology/blog/talks/2016/05/16/more-than-binary.html"
  - "'My favorite Unicode character: the zero width joiner!', video (!!Con 2016): http://confreaks.tv/videos/bangbangcon2016-my-favorite-unicode-character-the-zero-width-joiner, blog post with slides: https://anne.loves.technology/blog/talks/2016/05/09/bangbangcon.html"
---
I wrote a Scala macro to add a function to companion objects for annotated case classes. It was the first macro I’d written, and I learned a lot! Here are some tips and tricks that I think others would also find useful. You’ll learn about what a macro does, how to pattern match with quasiquotes, when macros are expanded, things a macro can’t do at compile time, and helpful debugging tips.
