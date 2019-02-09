---
name: Alexander Konovalov
title: "再帰:スキーマ,代数,finally tagless,データ型. 統合されたビジョン"
length: 90
audience: Intermediate
language: English
twitter: alexknvl
github: alexknvl
icon: https://pbs.twimg.com/profile_images/797920728859480065/sCOPNuwF_400x400.jpg
organization: Compellon, Analytics Engineer
tags:
  - Functional Programming
suggestions: 
  - Recursion Schemes(再帰的スキーマ)やfinally taglessエンコーディング、より汎用的な型理論について理解を深めたい人
  - Scalaにおける関数型プログラミングについて中ぐらいの理解ができており、より高度なトピックについて学びたい人
contributes:
  - Scalazのコントリビュータであり、チームメンバーでもあります。
speaker_experience:
  - WWW2017において学術論文の発表をしています。 <a href='https://www.slideshare.net/AlexanderKonovalov13/learning-event-extractors-from-knowledge-base-revisions'>https://www.slideshare.net/AlexanderKonovalov13/learning-event-extractors-from-knowledge-base-revisions</a> 
  - Lambdaconf 2018でも発表しましたが、Scalaz summitの合間で非公式に設定されたものだっため、十分な準備の時間は取れなかったものです
<a href='https://alexknvl.com/docs/scalaz_summit_presentation.pdf'>https://alexknvl.com/docs/scalaz_summit_presentation.pdf</a> 。
 
---
このトークでは、再帰的スキーマやfinally taglessエンコーディングの裏にある中心的概念をゼロから導出します。

型代数(type algebra)や同型写像(isomorphism)の簡単な紹介から始まり、そして単純な再帰的なデータ型とそれに対する様々な畳み込み(fold, foldMap, 直接的なfoldr)のような操作を通じて、final taglessや再帰的スキーマなどの同型写像を利用して異なる形態へと揉み込んでいく方法を学びます。

そうすれば自然なこととして "Recursive"型クラス、代数的データ型(ADT)のBoehm-Berarducciエンコーディング、catamorphism、そしてF代数(F-algebras)へと到達することでしょう。
