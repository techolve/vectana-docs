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
- 画面のスクリーンショット（`public/screenshots/{ja,en}/`）は、モノレポの `mise run docs:screenshots -- <このリポジトリ>/public/screenshots` で撮り直せます。架空のデモデータで撮るので、リリースで UI が変わったら撮り直してください
