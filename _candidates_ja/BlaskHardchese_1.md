---
name: blast-hardchese
title: "Guardrail を用いた原則に基づくコード生成"
length: 40
audience: Intermediate
language: English
twitter: blast_hardchese
github: blast-hardcheese
icon: https://avatars1.githubusercontent.com/u/278900?s=256&v=4
organization: Twilio, Sr. SWE
tags:
  - Functional Programming
  - Tools
  - Microservices
suggestions:
  - HTTP 開発者
contributes:
  - guardrail
  - dhall-terraform
speaker_experience:
  - ScalaMatsuri: https://youtu.be/ONlBglP8H3Y
  - Haskell Meetup: https://youtu.be/d36y3NYmxH8
  - Lambdaconf: https://youtu.be/qBU7u1Qa1fo
---
デザインの原則は重要です。ドキュメンテーションは重要です。

企業が成長するにつれ、チームが分散するにつれてチーム間の期待値を調整することが難しくなります。 HTTPサービスの仕様言語であるSwaggerを使用して調整が可能です。しかしながら、機能が変更されるとドキュメンテーションが不正確になることがあります。あるいは、仕様が誤って最初から作成され、利用者に間違いを指摘される可能性があります。仕様から原則に基づいたコードを生成することにより、型システムを活用してより良いソフトウェアを書くことができます。ドキュメントが間違っていると、コードはコンパイルされません。
