---
name: Matan Keidar
title: "(終わりなき)モノリスの退治"
length: 40
audience: Intermediate
language: English
twitter: matankdr
github: matankdr
icon: https://avatars.githubusercontent.com/matankdr
organization: Refinitiv
tags:
  - Tools
  - Best Practices
  - Software Design and Architecture
  - Microservices
suggestions:
  - Docker, Akka HTTP, sbt を触ったことがある人
  - ExecutionContext が何か分かっている人
  - 既存のモノリスプロジェクトをマイクロサービスベースなアーキテクチャに移行するためのテクニックなどを習いたい人
contributes:
  - <a href='https://github.com/cm-Well/'>https://github.com/cm-Well/</a>
speaker_experience:
  - 3年間大学でティーチング・アシスタントをしていました
  - AAMAS12 conference で講演を行いました
  - 会社や勉強会でトークを行ったことがあります
---
このトークでは、古い技術スタックを使った弊社のコアプロダクトをモダンな Reactive マイクロサービス指向のアーキテクチャへと移行する道のりを紹介します。

マイクロサービスを簡単に作るのに Giter8 を使ったり、共通の振る舞いをカプセル化するのに Akka HTTP を使ってライブラリを作ったことを話します。また、既存のマイクロサービスへのテンプレートの更新を適用するための更新メカニズムも実装しました。これらのプロセスを一般化するために、私たちは JMH、Gatling、Metrics-Scala、そして様々な Scala コンパイラのフラグを使いました。
