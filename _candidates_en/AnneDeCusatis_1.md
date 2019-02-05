---
name: Anne DeCusatis
title: "Tips from writing my first Scala macro"
length: 40
audience: Intermediate
language: English
twitter: precisememory
github: anne-decusatis
icon: https://pbs.twimg.com/profile_images/480068232133345280/yFdHO7PN_400x400.jpeg
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
  - "'A Pop Punk Introduction to Scala', presented at local meetup (no recording), blog post with slides: <a href='https://anne.loves.technology/blog/talks/2018/02/07/queensjs.html'>https://anne.loves.technology/blog/talks/2018/02/07/queensjs.html</a>"
  - "'More than Binary: Inclusive Gender Collection and You', video (PyCon 2016): <a href='https://www.youtube.com/watch?v=iW8ikFrUWPQ'>https://www.youtube.com/watch?v=iW8ikFrUWPQ</a>, blog post with slides: <a href='https://anne.loves.technology/blog/talks/2016/05/16/more-than-binary.html'>https://anne.loves.technology/blog/talks/2016/05/16/more-than-binary.html</a>"
  - "'My favorite Unicode character: the zero width joiner!', video (!!Con 2016): <a href='http://confreaks.tv/videos/bangbangcon2016-my-favorite-unicode-character-the-zero-width-joiner'>http://confreaks.tv/videos/bangbangcon2016-my-favorite-unicode-character-the-zero-width-joiner</a>, blog post with slides: <a href='https://anne.loves.technology/blog/talks/2016/05/09/bangbangcon.html'>https://anne.loves.technology/blog/talks/2016/05/09/bangbangcon.html</a>"
---
I wrote a Scala macro to add a function to companion objects for annotated case classes. It was the first macro I’d written, and I learned a lot! Here are some tips and tricks that I think others would also find useful. You’ll learn about what a macro does, how to pattern match with quasiquotes, when macros are expanded, things a macro can’t do at compile time, and helpful debugging tips.
