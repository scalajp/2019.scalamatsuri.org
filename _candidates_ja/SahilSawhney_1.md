---
name: Sahil Sawhney
title: "今までになかったリアクティブアーキテクチャの監視"
length: 40
audience: Intermediate
language: English
twitter: lihas5
github: sahil-sawhney
icon: https://pbs.twimg.com/profile_images/1091401167706488832/ZKQS9pXS_400x400.jpg
organization: Sr. Software Consultant, Knoldus Inc
tags:
  - Data Science / Machine Learning
  - DevOps
  - Software Design and Architecture
  - Microservices
suggestions:
  - 1. 分散システムに関して分散監視がもたらすあらゆる変化をシンプルに見たい人
  - 2. どうして監視がリアクティブな方法で出来るのか、それがあらゆる変化を解決するかを理解したい人
  - 3. リアクティブな監視パイプラインの基本的な構成要素について適切な考え方を得たい人
  - 4. 分散プラットフォーム上で動くアプリケーションの監視を効率的な仕組みを得たい人
  - 5. 集約されたメトリクスを機械学習に適用することで障害予測を積極的に伝達する方法を知りたい人
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
Scala, Akka-Http, Lagom, Cassandra, Kafkaなどのような技術で構成されているリアクティブなエコシステムを監視するのは際どいが、素朴な監視では、網羅されたリアクティブなシステムを保証するには全く足りない。

一つの方針として、PreMonR(予測を元にしたリアクティブなエコシステムの監視)は、特にKubernetesのような分散システムの上で動いているリアクティブなシステムの円滑な機能へのあらゆる脅威をずっと前から検出を援助出来る、予測を元にした異常検知でリアクティブで組み込まれているべき監視パイプラインを満たすように組み立てられている。
