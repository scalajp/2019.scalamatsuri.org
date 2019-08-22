---
name: 藤野宏樹
title: "ハイパフォーマンスScala"
length: 40
audience: Intermediate
language: Japanese
twitter: Fhiroki1
github: Hiroki6
icon: https://ja.gravatar.com/userimage/143452083/fb459a2afdf9f0f9fc2fe015a8f1c22b.jpeg
organization: Fringe81株式会社
tags:
  - Tools
  - Best Practices
suggestions:
  - Scalaでパフォーマンスを出したい人
contributes:
  - 
speaker_experience:
  - <a href="https://speakerdeck.com/hiroki6/strategy-for-concurrency-and-parallel-by-scala">Scala関西サミット2018</a>
  - '<a href="https://speakerdeck.com/hiroki6/gae-bq-load-strategy">bq_sushi #7</a>'
slide_url: https://speakerdeck.com/hiroki6/high-performance-scala
youtube: https://youtu.be/JMGKA85qGkQ
---
ScalaはJVM上で実行されるため、パフォーマンスが良い言語と言われています。
しかし（どの言語でもそうであるように）実際に開発した際にパフォーマンスに悩まされる方も多々いるのではないでしょうか？

- Full GCを発生させない
- DBアクセス等のブロッキング処理
- Scala言語特有の書き方
- etc

上記のようにScalaでハイパフォーマンスなアプリケーションを開発するためには様々な事について、考慮しなければなりません。
本発表ではパフォーマンス計測のためのプロファイリング方法から始まり、ボトルネックを解消するScalaの書き方、ノンブロッキング処理手法、並行処理手法について発表します。
