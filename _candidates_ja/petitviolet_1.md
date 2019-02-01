---
name: petitviolet(小紫)
title: "ピュアなドメインを支える技術"
length: 40
audience: Intermediate
language: Japanese
twitter: petitviolet
github: petitviolet
icon: https://pbs.twimg.com/profile_images/494667173453766656/oOXOl8Bw_400x400.jpeg
organization: Fringe81株式会社
tags:
  - Functional Programming
  - Best Practices
suggestions:
  - DDDを頑張りたい人。
  - 関数型プログラミングを現場で使いたい人。
contributes:
  - 
speaker_experience:
  - <a href="https://speakerdeck.com/petitviolet/scala-performance-tips-scalamatsuri2017">ScalaMatsuri2017</a>
  - <a href="https://speakerdeck.com/petitviolet/meta-programming-scala">Scala関西2017</a>
  - <a href="https://speakerdeck.com/petitviolet/real-world-graphql-on-scala">Scala関西2018</a>
---
昨今注目を集めているドメイン駆動設計をScalaで実装するにあたり、どうしても実装や技術の都合がドメインに入り込んでしまうことがよくあります。  
たとえば非同期処理のためのExecutionContextや、DB接続のためのトランザクション情報などがよくある例かと思います。  
そういった問題を、Scalaが持つ豊富な言語機能、さらには関数型プログラミングの力を利用して解決を目指します。  
もう少し具体的なテーマとして、ドメイン駆動設計とレイヤードアーキテクチャを組み合わせてWebアプリケーションを実装する際に、Scalazやcatsが提供するMonadを用いてドメイン層のインタフェースの抽象化を目指します。  
参考: <https://fringeneer.hatenablog.com/entry/2018/11/01/100531>