---
name: tkt_horikoshi
title: "Monixを操り、思いやりのある非同期プログラミングをあなたに"
length: 40
audience: Beginner
language: Japanese
twitter: tkt_horikoshi
github: takat0-h0rikosh1
icon: https://avatars0.githubusercontent.com/u/17715952?s=460&v=4
organization: セプテーニ・オリジナル Developer
tags:
  - Functional Programming
  - Best Practices
suggestions:
  - Scalaで非同期プログラミングを実装している人
  - 非同期プログラミングを最適化したい人
  - Monixに関心がある人。
contributes:
  - 
speaker_experience:
  - Scala関西summit2018
    <a href='https://gitpitch.com/takat0-h0rikosh1/circe-codec-presentation/master?grs=github&t=beige'>https://gitpitch.com/takat0-h0rikosh1/circe-codec-presentation/master?grs=github&t=beige</a>
---
インターネット広告に携わる職業柄ではありますが、自社では大規模データ取得のためにサードパーティAPIへ向けて頻繁にリクエストするようなバッチアプリケーションを良く目にします。
このようなアプリケーションにおいて非同期プログラミングの実装は避けては通れません。しかしながら、APIリクエスト制限、スレッドの状態管理等、
考慮しなければならない課題が多々あり簡単なものではありませんよね？
今回は非同期プログラミングのためのScalaライブラリであるMonixをテーマとし、効率的な非同期処理、スレッドセーフな並行処理へのアプローチ、
そして、サードパーティAPIへ思いやりを与えるための実装パターンについて解説したいと思います。
