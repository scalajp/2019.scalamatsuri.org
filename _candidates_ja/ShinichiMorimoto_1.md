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
  - 
---
最近多くのサービス・プロダクトでKubernetesをプロダクション環境で利用している事例が多々発表されています。  
またRaspberry Piを利用して、自宅にKubernetesクラスタを手軽に構築する事例についてもよく見られます。  
今回自宅のKubernetes クラスタ（Raspberry Pi）にAkka Clusterを用いてリアクティブかつ、おうちを便利にするシステムを構築しました。  
上記のシステムを構築することによりAkkaで分散システムを構築することができるAkka ClusterをKubernetes上で稼働させることで、より耐障害性に優れたシステムを構築できることに気づきました。  
本発表では上記のシステムを構築・運用することにより得られたAkka Cluster on Kubernetesのアーキテクチャ及びそのメリット、また失敗談についてご紹介します。