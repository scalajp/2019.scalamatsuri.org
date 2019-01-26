ScalaMatsuri
===========================================================

[![Build Status](https://travis-ci.org/scalajp/2019.scalamatsuri.org.svg?branch=master)](https://travis-ci.org/scalajp/2019.scalamatsuri.org)

このレポジトリは ScalaMatsuri 2019 のウェブサイトです。

## scalamatsuri.org の更新

masterブランチに変更内容をpushします。

## サイトの管理

ウェブサイトを複数ページに対応させるにあたり、Jekyll を使って作業をするようにします。

## セットアップ

### Rubyを使う場合

Ruby がインストールされた環境が必要です。

必要な gem をインストールします。

```sh
gem install bundler
bundle install --path vendor/bundle
```

サーバを起動してブラウザから http://localhost:4000/ にアクセスすると確認できます。
[Jekyllの公式ドキュメント](http://jekyllrb.com/docs/usage/)

```sh
bundle exec jekyll serve -w
```

エラーを確認する際は、以下のコマンドを実行してください

```sh
bundle exec jekyll build -V
```

### Dockerを使う場合

予め`docker`と`docker-compose`をインストールしておいてください

#### 準備

dockerのイメージをビルドする必要があるので、以下のコマンドを実行してください

```shell
docker-compose build
```

#### 起動

起動する場合は以下のコマンドを実行してください

```shell
docker-compose up
```

終了する場合は、Ctrl-Cで終了させてください。

#### 生成

生成時のエラーの検知をしたい場合は、以下のコマンドを実行してください

```sh
docker-compose run --rm jekyll bundle exec jekyll build -V
```


### 基本的な設定

_config.yml が基本設定です。

### 公開

[github pages](https://pages.github.com/)を使用しているため、編集内容を git push すれば、自動で反映されます。

### セッション応募ページの追加方法

`_candidates_ja/`, `_candidates_en/` 以下にそれぞれ `$firstName$lastName_$連番.md` を作り、日本語、英語の内容を記載します。
例えば鈴木一郎 (Ichiro Suzuki) さんの最初の応募に対しては `IchiroSuzuki_1.md` となります。

front matter (ファイル先頭の `---` と `---` で囲まれた部分) に次の内容を書きます。

* name (必須): 名前
* title (必須): トークのタイトル
* length (必須): トークの長さ (`10`, `40` または `90`)
* audience (必須): 聴衆の対象 (`Beginner`, `Intermediate` または `Advanced`)
* language (必須): 発表言語 (`Japanese` または `English`)
* twitter: Twitter アカウント (連名の場合はカンマ区切りで記載する。例: `taro,hanako`, URLは不可)
* github: Github アカウント (連名の場合はカンマ区切りで記載する。例: `taro,hanako`, URLは不可)
* icon: アイコンのURL
* organization: 所属組織
* tags: タグ
* suggestions: 聴くのをおすすめする人

front matter は YAML 形式です。文字列中に `:` を含む場合は `""` でクォートします。

本文にトークの概要を書きます。以下はテンプレート:

```markdown
---
name: X
title: "X"
length: 40
audience: Intermediate
language: English
twitter: X
github: X
icon: https://X.jpeg
organization: X
tags:
  - tag1
  - tag2
suggestions:
  - sample 1
  - sample 2
  - sample 3
---
ここにセッションの内容を markdown で書きます。
```

### セッション内容の修正/How to modify proposals

もし、掲載されたセッション情報に誤りや変更がある場合は、直接Pull Requestをお送りください。
ファイルは、`_candidates_ja/`, `_candidates_en/`以下に`$firstName$lastName_$連番.md`のファイル名で配置されています。
日本語のみでPullRequestを送っていただいた場合は、こちらで英訳も付けます。

If you find a mistake or a modification at proposal informaion, please send Pull Request.
Files are placed under `_candidates_ja/` and `_candidates_en/`, and named `$firstName$lastName_$number.md`.
You can send only English modification, in that case we translate to Japanese.

### スポンサーからのお知らせ情報

#### 追加方法

`_notice/` 以下に `(スポンサー名).md` を作り、スポンサーからのお知らせ情報を記載します。

front matter (ファイル先頭の `---` と `---` で囲まれた部分) に次の内容を書きます。

* title (必須): スポンサー名
* logo (必須): 200x70px のロゴ画像URL
* plan (必須): shogun, tairo, daimyo, samurai のいずれか
* link: 遷移先URL
* linkTitle: 遷移先ボタンの文字列（デフォルト: 「応募する」）

front matter は YAML 形式です。文字列中に `:` を含む場合は `""` でクォートします。

以下はテンプレート:

```markdown
---
title: "X"
logo: "/img/logo/x.png"
plan: shogun
link: "http://example.com"
---
X
```

#### ロゴから直接リンクしたい場合

スポンサーからのお知らせを ScalaMatsuri サイトに追加せず、スポンサーからのお知らせ一覧ページのロゴをクリックしたときに外部サイトへ
リンクするには、`_notice/` 以下に `(スポンサー名).md` を作り、次の内容を記載します。

* direct_link (必須): 外部サイトのURL
* logo (必須): 200x70px のロゴ画像URL
* plan (必須): shogun, tairo, daimyo, samurai のいずれか

```markdown
---
logo: "/img/logo/x.png"
plan: shogun
direct_link: "http://example.com"
---
```
