---
name: Jakub Kozłowski
title: "http4s 入門: サーバはただの関数である"
length: 40
audience: Intermediate
language: English
twitter: kubukoz
github: kubukoz
icon: https://blog.kubukoz.com/assets/images/kubukoz.jpg
organization: Ocado Technology, Software engineer
tags:
  - Functional Programming
  - Tools
  - Microservices
suggestions:
  - モダンで安全な HTTP サービス用のライブラリに興味がある人
contributes:
  - cats
  - console4cats
  - fs2
speaker_experience:
  - flatMap(Oslo) <a href='https://www.youtube.com/watch?v=HMs_F7LXTak'>https://www.youtube.com/watch?v=HMs_F7LXTak</a>
  - Scala Matsuri 2018
  - ScalaUA
---
モダンな web サービスを書こうと思えば、今は様々なフレームワークやライブラリから選ぶことができます。その 1つに http4s という Scala で HTTP サービスやクライアントを書くための関数型ライブラリがあります。このセッションでは、あなたの次のアプリで http4s の採用を検討するべき理由を紹介します:

- クライアント側とサーバー側で統一された型安全なリクエストとレスポンスモデル
- サーバ、リクエスト/レスポンスのボディー、およびストリーミングにおけるリソースの安全管理
- 特定のフレームワークに依らないテスト
