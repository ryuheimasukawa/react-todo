# 環境構築手順

## 準備

dockerを使用するため、[Docker Desktop](https://www.docker.com/ja-jp/products/docker-desktop/)をインストール

アカウントの作成は不要、アプリダウンロード後起動できればOK

※インストール済みの場合はスキップ

## リポジトリをクローン

開発を行うディレクトリに移動し、ターミナルで以下コマンドを実行

```
git clone https://github.com/ryuheimasukawa/react-todo.git
```

### クローンが完了したら以下コマンドを順番に実行（Docker Desktopを起動しておくこと）

ディレクトリ移動

```
cd react-todo/app
```

コンテナをビルド

```
make build
```

node packageをインストール

```
npm install
```

ローカル環境を起動

```
make up
```

http://localhost:3000/ にアクセスし、画面が出れば完了

