---
name: 森本真一
title: "おうちハックを支えるAkka Cluster on Kubernetes"
length: 40
audience: Intermediate
language: Japanese
twitter: shnmorimoto
github: shnmorimoto
icon: https://avatars3.githubusercontent.com/u/1239431?s=460&v=4
organization: Fringe81 Co.,Ltd. Engineer
tags:
  - Tools
  - Best Practices
  - Software Design and Architecture
suggestions:
  - Akka Clusterに興味がある方
  - AkkaをKubernetes上で稼働させることに興味がある方
contributes:
  - 
speaker_experience:
  - <a href="https://speakerdeck.com/shnmorimoto/circekaraxue-bu-genericprogrammingru-men-scalaguan-xi-summit-2018">Scala Kansai Summit 2018</a>
  - <a href="https://speakerdeck.com/shnmorimoto/real-world-kubernetes">Container X mas Party with flexy</a>
---
最近多くのサービス・プロダクトでKubernetesをプロダクション環境で利用している事例が多々発表されています。
またRaspberry Piを利用して、自宅にKubernetesクラスタを手軽に構築する事例についてもよく見られます。

今回自宅のKubernetes クラスタ（Raspberry Pi）にAkka Clusterを用いてリアクティブかつ、おうちを便利にするシステムを構築しました。

上記を通して、Akkaで分散システムを構築することができるAkka ClusterとKubernetesの相性の良さ、この２つを組み合わせることでより耐障害性に優れたシステムを構築できることに気付きました。
  
本発表ではこのシステムを構築・運用することにより得られたAkka Cluster on Kubernetesのアーキテクチャ及びそのメリット、また失敗談についてご紹介します。
