---
name: Chetan Khatri
title: "テラバイトのデータを Apache Spark と Scala DSL を使って本番環境でスケールさせる"
length: 40
audience: Intermediate
language: English
twitter: khatri_chetan
github: chetkhatri, fosscoder
icon: https://pbs.twimg.com/profile_images/1080061578148425730/mz8vPzuN_400x400.jpg
organization: Accionlabs Inc.
tags:
  - Big Data / Fast Data
  - Functional Programming
  - Tools
  - Best Practices
  - Intro to Scala
  - Software Design and Architecture
suggestions:
  - 1. Scala を用いた関数型プログラミングの初歩か、 Java を理解してる人
  - 2. Java もしくは Scala で並行プログラミングかマルチスレッドを理解している人
  - 3. 分散データ処理に興味があって、データをスケールさせる最適化に興味があるひと
contributes:
  - Elixir
  - scalaz
  - apache-spark
speaker_experience:
  - TransmogrifAI - Automate Machine Learning Workflow with the power of Scala and Spark at massive scale. - Scala.IO 2018 Lyon, France.
  - Scaling 30 TB's of Data lake with Apache HBase and Scala DSL at Production. - HBaseConAsia 2018, Beijing - China.
  - Scaling TB's of data with Apache Spark and Scala DSL at Production - HKOSCon 2018
---
Apache HBase はカラム型 NoSQL で、産業およびリサーチ分野においてデータ処理プラットフォームをスケールさせるためのデータレイク (data lake) としての広い採用実績があります。HBase のコンポーネントの一部や Apache Spark は Scala で書かれており、Spark や HBase の関数型な Scala DSL の美学を理解することは楽しいことです。ここでは、30TB、1日あたり 46億イベントにまで Apache HBase を用いてベースのデータレイクをスケールさせて、それを Apache Kafka、Apache Spark / Spark Streaming と統合した事例を紹介します。
