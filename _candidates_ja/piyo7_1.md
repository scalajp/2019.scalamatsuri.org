---
name: 鳥越貴智（piyo7）
title: "乱数を、乗りこなす　〜テスト・ロギング・チューニング〜"
length: 40
audience: Intermediate
language: Japanese
twitter: piyo7z
github: piyo7
icon: https://www.gravatar.com/avatar/e650d601c28f8accb2eeacca8fc2b092?s=200
organization: 株式会社サイバーエージェント　データエンジニア
tags:
  - Best Practices
  - Data Science / Machine Learning
  - Microservices
suggestions:
  - 乱数をノリで使ってる人
  - 乱数を信用していない人
  - 乱数と仲良くなりたい人
contributes:
  - 
speaker_experience:
  - "ScalaMatsuri 2018: <a href='https://www.slideshare.net/TaokatomoTorigoe/lets-simulate-a-quantum-computer-with-pretty-scala'>https://www.slideshare.net/TaokatomoTorigoe/lets-simulate-a-quantum-computer-with-pretty-scala</a>"
---
親愛なるScala使いの皆様、乱数とは仲良くやってますか……？
ソフトウェアの様々な局面で利用される乱数ですが、扱いづらい印象を持つ方も少なくないと思います。
まず乱数を利用したプログラムは、単体テストからして厄介です。サイコロ関数を100回振って6が出る回数なんて、やってみないと分からないですし、まぁ10~20回には収まるだろうというテストを書いたとしても、運が悪ければ失敗してしまいますね。。。
本セッションでは、Finagleを使った広告選択マイクロサービスの乱択アルゴリズムを一新するにあたり、いかにテスト・ロギング・チューニングを行って乱数という荒波を乗りこなしたか、具体的なScalaのコードを追いかけながらお話しします。
