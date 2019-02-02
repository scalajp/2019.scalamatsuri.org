---
name: 嶽雅也
title: "FP in Scalaの学びを他言語へ Dartz入門"
length: 40
audience: Beginner
language: Japanese
twitter: azarashi1229
github: 
icon: /img/candidates/MasayaDake.jpg
organization: 
tags:
  - Functional Programming
  - Intro to Scala
suggestions:
  - FP in Scalaを読んでいるエンジニア、FlutterなどでDartを書くことになったエンジニアに向けておすすめです。
contributes:
  - 
speaker_experience:
  - JJUG 2017 spring 
    グラフデータベース入門 
    <a href='https://www.slideshare.net/MasayaDake/ss-76145383'>https://www.slideshare.net/MasayaDake/ss-76145383</a>
  - Scala関西2017 
    iOSエンジニアのためのScala入門 
    <a href='https://www.slideshare.net/MasayaDake/iosscala-79565464'>https://www.slideshare.net/MasayaDake/iosscala-79565464</a>
  - iOSDC2017
    動画コンテンツにおいて、BGMとの制御でつまづいたところ
    <a href='https://www.slideshare.net/MasayaDake/bgm-79828928'>https://www.slideshare.net/MasayaDake/bgm-79828928</a>
---
日本人Scalaエンジニアにとっての関数型プログラミング入門として、「Fuctional Programming in Scala」という書籍があります。
そちらから考え方を抜粋して、他言語でどのように使えるかをご紹介します。

対象言語は最近モバイルアプリ界隈で流行って来ているFlutterというクロスプラットフォーム向けのフレームワークの開発言語であるDartです。
実はこのDartですが、Dartzというライブラリがあり、ScalazやCatsのような関数型の考え方を取り入れたライブラリになります。
<a href="https://github.com/spebbe/dartz">https://github.com/spebbe/dartz</a>
ただ、Dartzの作者は「FP in Scala」は関数型の書籍の入門としてはおすすめしないと言及はしてはいますが笑、今回はこのテーマで発表させていただきます。

そちらにあるExampleのコードから「Fuctional Programming in Scala」の中で読んだTIPSを経て、紹介および解説していきます。
