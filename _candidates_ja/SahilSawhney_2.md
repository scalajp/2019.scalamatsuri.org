---
name: Sahil Sawhney
title: "マイクロサービスベースの CI/CD パイプラインを関数型スタイルで構築する"
length: 10
audience: Intermediate
language: English
twitter: lihas5
github: sahil-sawhney
icon: https://pbs.twimg.com/profile_images/1091401167706488832/ZKQS9pXS_400x400.jpg
organization: Sr. Software Consultant, Knoldus Inc
tags:
  - Functional Programming
  - DevOps
  - Microservices
suggestions:
  - 1. 関数型プログラミングの重要な側面を復習したい人
  - 2. 関数型プログラミングの基本原則が CI/CD パイプラインの信頼性や効率をどのように高めるか理解したい人
  - 3. マイクロサービスベースのインフラで CI/CD パイプラインに必要なステップを知りたいエンジニア
contributes:
  - 
speaker_experience:
  - TechTriveniにおいて、"Distributing the SMACK stack - Kubernetes VS DCOS"について話しました。
    <a href='https://youtu.be/_mVmxosuK1c'>https://youtu.be/_mVmxosuK1c</a>
  - 幾つかのミートアップを主催しました。そのうち最後のものでは "Being Stateful In Kubernetes" について話しました。
    <a href='https://www.youtube.com/watch?v=c66uBgJ72P8'>https://www.youtube.com/watch?v=c66uBgJ72P8</a>
  - 様々な組織間のセッション。例えば "Using Antlr With Scala"。
    <a href='https://www.youtube.com/watch?v=9SYTPcj6ic8'>https://www.youtube.com/watch?v=9SYTPcj6ic8</a>
---
関数型プログラミングの広がりを受けて、CI/CD パイプラインを変換する、またシステムが副作用を持たず不変な入出力を持つように組み上げるために、学びを活かせないかと私たち Knoldus は考えました。意図したとおりのものをデプロイするためです。例えば、ビルドサーバで実行中の CI パイプラインが成果物と docker イメージ(不変なエンティティ)を出力として生成し、それらがデプロイパイプラインに渡されテスト環境へデプロイされる。最終的にまったく同じ機能を本番環境へデプロイするといった流れを考えることができます。
