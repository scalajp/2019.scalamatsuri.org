---
name: Alexander Konovalov
title: "Scala での DSL"
length: 90
audience: Intermediate
language: English
twitter: alexknvl
github: alexknvl
icon: https://pbs.twimg.com/profile_images/797920728859480065/sCOPNuwF_400x400.jpg
organization: Compellon, Analytics Engineer
tags:
  - Functional Programming
  - Data Science / Machine Learning
  - Software Design and Architecture
suggestions:
  - Scala で関数型プログラミングにちょっと手を出した人、また洗練された内部 DSL を上手にかけるようになりたい人。汎用またはドメイン固有ライブラリの開発者。
contributes:
  - Scalazのコントリビュータであり、チームメンバーでもあります。
speaker_experience:
  - WWW2017において学術論文の発表をしています。 <a href='https://www.slideshare.net/AlexanderKonovalov13/learning-event-extractors-from-knowledge-base-revisions'>https://www.slideshare.net/AlexanderKonovalov13/learning-event-extractors-from-knowledge-base-revisions</a> 
  - Lambdaconf 2018でも発表しましたが、Scalaz summitの合間で非公式に設定されたものだっため、十分な準備の時間を取れませんでした。 <a href='https://alexknvl.com/docs/scalaz_summit_presentation.pdf'>https://alexknvl.com/docs/scalaz_summit_presentation.pdf</a> 
---
DSL の実用例をいくつか紹介します: 正規表現、パーサーコンビネーター、tensorflowのようなベクトルと行列演算を記述する言語。
これらの例を使って Scala の DSL 構築における高度な話題について議論します。

1. DSL でアプリカティブとモナディックスタイルをいつ使うか？
2. DSL が遅延評価されるべきなのはいつ？
3. 共有（再帰的定義）を安全に観測するには？
4. DSL を拡張可能にするには？
5. Scala の型システムを使って DSL の型安全を担保するには？
