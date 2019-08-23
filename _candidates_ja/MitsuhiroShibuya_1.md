---
name: 渋谷 充宏(@m4buya)
title: "Scalaライブラリを作る前に知っておきたいメンテナンスのこと"
length: 40
audience: Intermediate
language: Japanese
twitter: m4buya
github: mshibuya
icon: https://avatars1.githubusercontent.com/u/486678?s=400&v=4
organization: 株式会社オプト　データテクノロジー開発部　チームマネージャー
tags:
  - Best Practices
suggestions:
  - ライブラリを作ろうとしているが、なにか見落としていて将来困ったりしないか不安な人
  - OSSに貢献したいが、どんなことに気をつけたらいいか知りたい人
contributes:
  - "RailsAdmin
    Railsアプリケーションに容易に管理画面を追加できるRubyライブラリ
    <a href='https://github.com/sferik/rails_admin'>https://github.com/sferik/rails_admin</a>"
  - "CarrierWave
    ファイルアップロードRubyライブラリ
    <a href='https://github.com/carrierwaveuploader/carrierwave'>https://github.com/carrierwaveuploader/carrierwave</a>"
  - "bigquery-fake-client
    ローカルにてPostgreSQL等を用いBigQueryをエミュレートできるScalaライブラリ
    <a href='https://github.com/opt-tech/bigquery-fake-client'>https://github.com/opt-tech/bigquery-fake-client</a>"
speaker_experience:
  - "Scalaによるtype-safeなCloudFormation DSL
    2018/4/3「市ヶ谷Geek★Night #17 ScalaMatsuri補完計画」にて
    <a href='https://qiita.com/mshibuya/items/b8c5ace340e638af0f95'>https://qiita.com/mshibuya/items/b8c5ace340e638af0f95</a>"
  - "広告代理店でSREチームを立ち上げるためにやったこと
    2018/9/26「SRE Lounge #5」にて
    <a href='https://qiita.com/mshibuya/items/5570ac551dbddbcb94b1'>https://qiita.com/mshibuya/items/5570ac551dbddbcb94b1</a>"
slide_url: https://speakerdeck.com/mshibuya/scalaraiburariwozuo-ruqian-nizhi-tuteokitaimentenansufalsekoto
youtube: https://youtu.be/Aagcg8VXrX4
---
「コードの再利用」がいかに強力であるかについては議論の余地はないでしょう。我々は何度も誰かがどこかで解いたことのある問題を繰り返し別の手段で解く必要などないのです。
そのための仕組みが「ライブラリ」になるわけですが、当然作っておしまいではダメで、利用者が今後も困ることなく使っていけるようにメンテナンスされる必要があります。
この発表では

- 複数Scala/JDKバージョンへの対応
- バージョニング
- バイナリ互換性
- Javaとの相互運用性

といったScalaライブラリを長く適切にメンテナンスしていく上で知っておきたいトピックについて解説します。
