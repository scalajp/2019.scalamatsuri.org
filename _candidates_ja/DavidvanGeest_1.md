---
name: David van Geest
title: "優しく実践的なパス依存型入門"
length: 40
audience: Intermediate
language: English
twitter: DWvanGeest
github: DWvanGeest
icon: https://pbs.twimg.com/profile_images/644247268271349760/53O4TbBI_400x400.jpg
organization: PagerDuty, Inc.
tags:
  - Functional Programming
  - Intro to Scala
suggestions:
  - 型安全性を保ったままリアルワールドのデータをモデル化するのに興味がある人
  - パス依存型に興味がある人
  - これらの技術を使ったプロダクションで動いているオープンソースのコードを見たい人
contributes:
  - Arrivals - <a href="https://github.com/PagerDuty/arrivals">https://github.com/PagerDuty/arrivals</a>
speaker_experience:
  - flatMap(Oslo) 2018 - <a href="https://www.youtube.com/watch?v=DRxLFWmvJ8A">https://www.youtube.com/watch?v=DRxLFWmvJ8A</a>
  - Scala Up North 2016 - <a href="https://www.youtube.com/watch?v=-4iaDd2RBSI">https://www.youtube.com/watch?v=-4iaDd2RBSI</a>
---
与えられたインプットに応じて異なるフィールドを返す HTTP API を考えてみて下さい。そのような API に対して、あなたならどうやって型安全なクライアントを実装するでしょう? コードは `Option` だらけになったでしょうか?
キャスティングしちゃいますか?

このトークでは、Scala のパス依存型を使ってよりクリーンで安全な解法を紹介します。その途中で、抽象型メンバーや依存メソッド型などの関連する概念も見ていきます。このような用語は近寄りがたいイメージがありますが (私にとってもです)、リアルワールドの問題を解決するのに役立つシンプルな概念です。
