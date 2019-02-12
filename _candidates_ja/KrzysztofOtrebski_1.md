---
name: Krzysztof Otrębski
title: "State 対ステートフルなアクター"
length: 40
audience: Intermediate
language: English
twitter: kotrebski
github: otrebski
icon: /img/candidates/KrzysztofOtrebski.jpg
organization: Ocado Technology / Scala Developer
tags:
  - Functional Programming
  - Best Practices
suggestions:
  - Akka を使い始めて、状態変遷やビジネスロジックを Akka Actor から抜き出す方法を模索している人
  - 関数型プログラミングからの恩恵を得たい人
contributes:
  - <a href='https://github.com/otrebski/sbt-flaky'>https://github.com/otrebski/sbt-flaky</a>
  - <a href='https://github.com/otros-systems/otroslogviewer'>https://github.com/otros-systems/otroslogviewer</a>
  - <a href='https://plugins.jetbrains.com/plugin/7406-otrosjumptocode'>https://plugins.jetbrains.com/plugin/7406-otrosjumptocode</a>
speaker_experience:
  - San Francisco Scala User Group - <a href='https://www.youtube.com/watch?v=g7LHqcMg6MI'>https://www.youtube.com/watch?v=g7LHqcMg6MI</a>
  - JavaOne
  - Geecon (Cracow) <a href='https://vimeo.com/185781733'>https://vimeo.com/185781733</a>, <a href='https://vimeo.com/131005763'>https://vimeo.com/131005763</a>
---
このトークでは、ビジネスロジックを Actor から State モナドへと移行させる方法を解説します。ビジネスロジックを合成可能で、副作用無しの方法で実装することの利点を明らかにしていきます。

このトークは全てのビジネスロジックを Actor 内部に持っていたプロジェクトを元にしています。私たちの目標はこれらのアクターを State モナドへとリファクタリングすることです。この変更により、アプリケーションのテストしやすくなり、分かりやすくなります。
