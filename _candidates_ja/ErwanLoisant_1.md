---
name: Erwan Loisant
title: "Scalaにおける並行処理: Future、アクターとIOモナド"
length: 40
audience: Intermediate
language: English
twitter: erwan
github: erwan
icon: https://avatars3.githubusercontent.com/u/16061?s=400&u=e1cb72e7c296a1258ef05bef13bc58ee5bf80752
organization: Zendesk
tags:
  - Functional Programming
  - Software Design and Architecture
suggestions:
  - 既にScalaをよく知っており、Scalaでの並行処理を扱うためのさまざまな方法についてと、それらの方法はどのように比較されるのかについてと、そしてあなたのユースケースに選択する最適な方法は何かについてよく理解したい人。
contributes:
  - Play Framework (from 2009 to 2014)
speaker_experience:
  - "Here is a talk I did internally, to introduce Scala colleagues: <a href='https://docs.google.com/presentation/d/1lSc6vWVETqnKxYST1159W9nD4mUbVM_edYnfbFwk9Ic'>https://docs.google.com/presentation/d/1lSc6vWVETqnKxYST1159W9nD4mUbVM_edYnfbFwk9Ic</a>"
---
JVM、特にScalaは複数のタスクを並列実行するためにいくつかの方法を提供しています。このトークではScalaで並列性を扱う主な方法を詳しく説明します。Future(標準ライブラリの一部)、アクター（特にAkkaを使用）、そしてHaskellに触発されたIOモナドを実装した最近のいくつかのライブラリー（私達は例としてcats effectを使用します）について説明します。
