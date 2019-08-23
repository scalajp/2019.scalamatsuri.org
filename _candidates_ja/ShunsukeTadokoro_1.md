---
name: 田所 駿佑 (@todokr)
title: "AWS LambdaでScalaをサクサク動かす"
length: 40
audience: Beginner
language: Japanese
twitter: todokr
github: todokr
icon: https://avatars2.githubusercontent.com/u/2328540?s=460&v=4
organization: 株式会社ビズリーチ
tags:
  - Others
suggestions:
  - LambdaもScalaで書きたくてしょうがない方
contributes:
  - PlayFramework
speaker_experience:
  - JJUG CCC 2017 Fall 「新しいプログラミング言語の学び方 HTTPサーバーを作って学ぶJava, Scala, Clojure」(<a href='https://speakerdeck.com/todokr/xin-siihurokuraminkuyan-yu-falsexue-hifang-httpsahawozuo-tutexue-hu-java-scala-clojure'>https://speakerdeck.com/todokr/xin-siihurokuraminkuyan-yu-falsexue-hifang-httpsahawozuo-tutexue-hu-java-scala-clojure</a>)
  - D3 「Scala絵文字ライブラリにマクロなどを導入してみた」 (<a href='https://speakerdeck.com/todokr/scalahui-wen-zi-raiburarini-macronadowodao-ru-sitemita'>https://speakerdeck.com/todokr/scalahui-wen-zi-raiburarini-macronadowodao-ru-sitemita</a>)
  - 渋谷Java 「JISから迫る文字コード入門」 (<a href='https://speakerdeck.com/todokr/jiskarapo-ruwen-zi-kodoru-men'>https://speakerdeck.com/todokr/jiskarapo-ruwen-zi-kodoru-men</a>)
slide_url: https://speakerdeck.com/todokr/running-scala-on-aws-lambda-in-a-snappy-way
youtube: https://youtu.be/YPePVPgx-Ew
---
サーバーレスコンピューティングサービスの代表格、AWS Lambdaを利用している方も多いでしょう。LambdaのJava8ランタイムでScalaを動かすこともできますが、気になるのがコールドスタート時におけるJVM起動のオーバーヘッドです。
このセッションではLambdaでScalaをサクサク動かすために、Graal VMでのネイティブコンパイル、Scala Native、Scala.jsの3つの手法を紹介し、比較します。
