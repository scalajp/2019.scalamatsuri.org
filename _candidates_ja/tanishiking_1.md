---
name: tanishiking(谷口力斗)
title: "いかにして我々は10年もののPerlプロダクトをScalaでリプレースしたか"
length: 40
audience: Intermediate
language: Japanese
twitter: tanishiking
github: tanishiking
icon: https://avatars0.githubusercontent.com/u/9353584?s=460&v=4
organization: 株式会社はてな
tags:
  - Best Practices
  - Software Design and Architecture
  - Microservices
suggestions:
  - レガシーシステムをScalaで置き換えようとしている人
contributes:
  - scalafmt
  - scalafix
speaker_experience:
 - "<a href='https://speakerdeck.com/tanishiking/format-things-with-scalafmt'>Scala関西Summit 2018</a>"
---
はてなブックマークはサービス開始から10年以上が経ち、Perlで書かれたコードベースの肥大化・複雑化、アーキテクチャの老朽化によるメンテナンスコスト増大という課題を抱えていました。これらの課題への対処のため2015年にいちからシステムを作り直すプロジェクトがスタートし、最近このプロジェクトが完了しました！(※2019年3月現在は開発中)
作り直しに際して、すべてのコードベース・DBスキーマ・アーキテクチャなどを刷新し、コアアプリケーションの実装には堅牢なシステムの開発/運用に適しており社内での採用実績のあるScalaを採用しました。

このセッションでは、我々がどのようにしてレガシーなソフトウェアのリプレースプロジェクトを進めたか、Perlを得意とするエンジニアの多い環境でのScalaの採用、プロジェクトを通じて得られた良かったことや良くなかったことをご紹介しようと思います。
