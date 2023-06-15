# ZTMY Font extention of Chromium browser

`Google Chrome`などの`Chromium`ベースのブラウザで使用できる拡張機能です。

![demo](https://www.dropbox.com/s/cjmv445qm9fst69/demo.png?raw=1)

## インストール

以下の手順でインストールを進めてください。

- フォントのダウンロード
- フォントの編集
- フォントのコピー
- 拡張機能を読み込む

### フォントのダウンロード

以下の2つのフォントをダウンロードしてください。(二次配布禁止のため)

- [ZTMY_MOJI-R.otf](https://zutomayo.net/font/)
- [PixelMplus12-Regular.ttf](https://itouhiro.hatenablog.com/entry/20130602/font)

### フォントの編集

[FontForge](https://fontforge.org/)を使用して、[`ZTMY_MOJI-R.otf`](https://zutomayo.net/font/)フォントを編集します。フォントが割り当てられていない部分(ダミーフォント)を`Cut`し、`OpenType`フォントとして出力してください。

![font-face](https://www.dropbox.com/s/6gjti8nbmho96gp/font-face.png?raw=1)

### フォントのコピー

[Release](https://github.com/wiyco/ZTMY-font-chromium/releases)からダウンロードした`zip`を解凍し、`/fonts`フォルダに以下2つのフォントをコピーしてください。

- `ZTMY_MOJI-R.otf(編集済み)`
- `PixelMplus12-Regular.ttf`

### 拡張機能を読み込む

`chromium`ベースのブラウザで、`拡張機能を管理`から`デベロッパーモード`を`ON`にし、`パッケージ化されていない拡張機能を読み込む`から解凍したフォルダを指定してください。

> **Warning**
> 
> 読み込んだ後にフォルダの場所を変えた際は再度フォルダを指定する必要があります。

## Contributor

### Icon

[@yokotoraaaa](https://twitter.com/yokotoraaaa)
