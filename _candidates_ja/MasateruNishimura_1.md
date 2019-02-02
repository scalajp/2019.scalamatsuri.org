---
name: 西村政輝
title: '広告配信プラットフォーム "CA DyVE" を支える Scala + GCPなリアクティブシステム'
length: 40
audience: Intermediate
language: Japanese
twitter: mn_swtl
github: 
icon: https://pbs.twimg.com/profile_images/859762077472370689/IoMPJ6Zx_400x400.jpg
organization: 株式会社サイバーエージェント
tags:
  - Big Data / Fast Data
  - Best Practices
  - Software Design and Architecture
suggestions:
  - リアクティブシステムについて具体的なイメージをつかみたい人
  - 高スループットかつ低レイテンシなシステムとその設計に興味がある人
contributes:
  - 
speaker_experience:
  - "ScalaMatsuri 2017：DMMのAPI GatewayをAkka StreamsとAkka HTTPで作り込んでみた 
    <a href='http://2017.scalamatsuri.org/#schedule'>http://2017.scalamatsuri.org/#schedule</a> 
    <a href='https://speakerdeck.com/mananan/implementing-dmm-api-gateway-in-akka-streams-and-http'>https://speakerdeck.com/mananan/implementing-dmm-api-gateway-in-akka-streams-and-http</a> 
    <a href='https://youtu.be/1WvueJg6gOY'>https://youtu.be/1WvueJg6gOY</a>"
  - "AWS Summit Tokyo 2017: (D4T6-3　導入事例トラック 3) DMM における会員基盤プラットフォームへのAWS導入から活用事例の紹介
    <a href='https://aws.amazon.com/jp/summit2017-report/details/'>https://aws.amazon.com/jp/summit2017-report/details/</a>
    <a href='https://d1.awsstatic.com/events/jp/2017/summit/slide/D4T6-3.pdf'>https://d1.awsstatic.com/events/jp/2017/summit/slide/D4T6-3.pdf</a>
    <a href='https://www.youtube.com/watch?v=4J4CI-EI_WM'>https://www.youtube.com/watch?v=4J4CI-EI_WM</a>"
---
DSPと呼ばれる広告配信プラットフォームは毎秒数万に及ぶ広告入札リクエストを100ミリ秒以内にレスポンスする必要があります。弊社のDSPの一つである"CA DyVE"ではGCPをフル活用したリアクティブシステムとして設計することで上記に対応しました。
本セッションでは、CA DyVEの設計の主に下記について、図やScalaのコードで紹介します。

- 高トラフィック/低レイテンシなシステムを拡張性や復元性をもって支えるリアクティブシステムとしての全体アーキテクチャ
- 快適な運用保守を目的としたクラウドコンポーネント選定（GCPの場合）
- 特性に応じた処理方式の使い分け(オンライントランザクション処理、ストリーミング処理、またはバッチ処理)
- Circuit Breaker, Throttling, Bulkhead, CQRS+Event Sourcingといったアーキテクチャパターンの活用
