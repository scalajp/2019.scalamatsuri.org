---
name: Shunsuke Tadokoro
title: "Running Scala on AWS Lambda in a snappy way"
length: 40
audience: Beginner
language: Japanese
twitter: todokr
github: todokr
icon: https://avatars2.githubusercontent.com/u/2328540?s=460&v=4
organization: BizReach
tags:
  - Others
suggestions:
  - Those who really want to run Scala on AWS Lambda
contributes:
  - PlayFramework
speaker_experience:
  - JJUG CCC 2017 Fall (https://speakerdeck.com/todokr/xin-siihurokuraminkuyan-yu-falsexue-hifang-httpsahawozuo-tutexue-hu-java-scala-clojure)
  - D3 (https://speakerdeck.com/todokr/scalahui-wen-zi-raiburarini-macronadowodao-ru-sitemita)
  - Shibuya Java (https://speakerdeck.com/todokr/jiskarapo-ruwen-zi-kodoru-men)
---
Many might already be using AWS Lambda, the front runner of serverless computing services. Using the Java 8 runtime, it's possible to run Scala on AWS Lambda, but the JVM spin-up overhead during a cold start is a bit problematic.

In this session, I will compare three approaches to making Scala run on AWS Lambda in a snappy way: native compilation using Graal VM, Scala Native, and Scala.js.
