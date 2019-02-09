---
name: Iaroslav Zeigerman
title: "Hadoop における、Akka Cluster を用いた汎用リソースマネジメント"
length: 40
audience: Intermediate
language: English
twitter: izeigerman
github: izeigerman
icon: https://pbs.twimg.com/profile_images/1045399410564190208/11RdzRtf_400x400.jpg
organization: dotData Inc. - Senior Software Engineer 
tags:
  - Big Data / Fast Data
  - Tools
  - Data Science / Machine Learning
  - Software Design and Architecture
suggestions:
  - 純粋な Hadoop のインフラストラクチャに制約されていたり、ある種の分散ワークフローにおいては Spark が不十分あるいは不便である、という人には特に有益
  - Hadoop/Spark/Akka を既に使用している、あるいは興味のある人
contributes:
  - <a href='https://github.com/izeigerman/akkeeper'>https://github.com/izeigerman/akkeeper</a>
  - <a href='https://github.com/BayesWitnesses/m2cgen'>https://github.com/BayesWitnesses/m2cgen</a>
  - <a href='https://github.com/izeigerman/parsecat'>https://github.com/izeigerman/parsecat</a>
speaker_experience:
  - First time speaker
---
Hadoop エコシステムにおいて Apache Spark を超えるものはあるのでしょうか？ データサイズではなく計算量がスケーラビリティへの要求を規定している際には果たしてどうすべきでしょうか？ 本セッションでは、私達の Scala ベースのエンタープライズ予測モデリングシステムの基本的な技術を明らかにします。また、スケーラビリティと高可用性を厳しく要求される特別な分散ワークフローを、どのようにして YARN と Akka を使って構築し実行しているのかをご紹介します。そして、この目的に適うツールについて議論し、このアプローチが特に有益となるであろうユースケースについてもご紹介します。
