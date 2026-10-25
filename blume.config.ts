import { defineConfig } from "blume";

export default defineConfig({
  title: "Vectana",
  description: "プロジェクトの依存パッケージとランタイムの脆弱性・サポート終了（EOL）を監視して通知する Vectana のドキュメント",
  logo: "/logo.svg",
  i18n: {
    defaultLocale: "ja",
    locales: [
      { code: "ja", label: "日本語" },
      { code: "en", label: "English", style: "Plain, friendly technical English for end users and admins" },
    ],
  },
  footer: {
    links: [
      { label: "GitHub", href: "https://github.com/techolve/vectana" },
      { label: "Docker Hub", href: "https://hub.docker.com/r/heki0824/vectana" },
      { label: { ja: "変更履歴", en: "Changelog" }, href: "https://github.com/techolve/vectana/blob/main/CHANGELOG.md" },
    ],
  },
  deployment: {
    site: "https://docs.vectana.techolve.org",
  },
});
