# Vectana Docs

[Vectana](https://github.com/techolve/vectana) のドキュメントです（日本語・英語）。公開先: https://docs.vectana.techolve.org

[Blume](https://github.com/haydenbleasel/blume) で作っています。

```bash
mise install      # Node.js
mise run install  # 依存関係
mise run dev      # http://localhost:4321 でプレビュー
mise run check    # 型・リンク・翻訳のチェック
```

- 日本語のページは `docs/`、英語は `docs/en/` に同じ構成で置きます
- `main` に push すると GitHub Actions でビルドされ、GitHub Pages に公開されます
- 画面のスクリーンショット（`public/screenshots/{ja,en}/`）は、すべて実際のアプリを Playwright で撮ったものです。モノレポの `mise run docs:screenshots -- <このリポジトリ>/public/screenshots` で撮り直せます。架空のデモデータと、OSV・endoflife.date・GitHub の代わりの模擬サーバーを使うので、ネットワークなしでも同じ画面になります。リリースで UI が変わったら撮り直してください。手で作った画像や生成した画像は使わないでください

## ライセンス

このリポジトリ（ドキュメントの文章・画像・設定）は [CC BY 4.0](LICENSE) です。Vectana 本体のライセンスは [AGPL-3.0](https://github.com/techolve/vectana/blob/main/LICENSE) です。
