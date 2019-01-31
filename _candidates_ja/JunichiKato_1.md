---
name: かとじゅん
title: "AWS EKSとAkkaを使ってEvent Sourcingを作るにはどうしたらよいか"
length: 90
audience: Advanced
language: Japanese
twitter: j5ik2o
github: j5ik2o
icon: https://pbs.twimg.com/profile_images/1044736680001855488/RFNyvyfC_400x400.jpg
organization: Chatwork株式会社
tags:
  - Software Design and Architecture
suggestions:
  - CQRS+Event Sourcingに興味がある人
  - リアクティブシステムに興味がある人
  - Akkaに興味がある人
contributes:
  - 
speaker_experience:
  - [https://speakerdeck.com/j5ik2o/tomeinmoterinkufalseshi-mefang](https://speakerdeck.com/j5ik2o/tomeinmoterinkufalseshi-mefang)
  - [https://speakerdeck.com/j5ik2o/scaladefalsedomeinmoderingufalseyarikata](https://speakerdeck.com/j5ik2o/scaladefalsedomeinmoderingufalseyarikata)
  - [https://speakerdeck.com/j5ik2o/scalakodototomonikao-erudomeinmoderingu](https://speakerdeck.com/j5ik2o/scalakodototomonikao-erudomeinmoderingu)
---
海外では、Kubernetes上にAkka-Clusterを構成し、耐障害性やスケラビリティに優れたシステムを構築しようというムーブメントがあります。Akkaはノードを跨がるような分散型アプリケーションを開発するためのツールキットであるため、コンテナレベルでのデプロイ・スケーリングなどのオーケストラレーション機能が必要です。そういう意味では、Kubernetesはもはや現実的な選択肢です。つい最近、東京リージョンにEKSがきましたので、このような関心は高まってくると思います。今回は、EKS上で本格的にEvent Sourcingをするにはどうしたらよいか、またどんな問題点があるのかなど、実際に動くコードを見ながら議論したいと思います。
