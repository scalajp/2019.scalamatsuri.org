---
name: 丹賀健一（@dnskimox）
title: "値オブジェクトと永続化に関するあれこれ"
length: 10
audience: Intermediate
language: Japanese
twitter: dnskimox
github: dnskimo
icon: https://pbs.twimg.com/profile_images/952761974110093312/uTN9A_1e_400x400.jpg
organization: アルプ株式会社
tags:
  - Software Design and Architecture
suggestions:
  - ・ScalaでDDDを実践したい方
  - ・ドメインモデル貧血症にお悩みの方
contributes:
  - 
speaker_experience:
  - ・PHPカンファレンス福岡2018（<a href='https://speakerdeck.com/dnskimo/pofeaadedu-mijie-kudoctrine2'>https://speakerdeck.com/dnskimo/pofeaadedu-mijie-kudoctrine2</a>）
  - ・PHPカンファレンス仙台2019（<a href='https://speakerdeck.com/dnskimo/phpdehazimerucqrs'>https://speakerdeck.com/dnskimo/phpdehazimerucqrs</a>）
---
ドメイン駆動設計を実践する際、エンティティと値オブジェクトを見分けることは重要なポイントの一つです。
ですが元よりイミュータブルなオブジェクトの使用が推奨されるScalaにおいて、値オブジェクトを意識する意義はどこにあるのでしょうか？
また、一意な識別子を持たない値オブジェクトはどのようにデーターベースに保存すべきでしょうか？
エリック・エヴァンス氏のDDDやマーティン・ファウラー氏のPofEAAに登場するパターンを頼りに、実際のScalaのコードを交えながら議論したいと思います。
