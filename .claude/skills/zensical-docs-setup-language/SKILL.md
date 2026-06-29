---
name: zensical-docs-setup-language
description: Configure site language, directionality, and language selector for multilingual docs.
---

# Zensical Docs: Setup language

Use this skill when the user asks about localization settings and multilingual navigation.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/language/

## Key configuration

Site language:

```toml
[project.theme]
language = "en"
```

Directionality override:

```toml
[project.theme]
direction = "ltr"
```

Language selector:

```toml
[project.extra]
alternate = [
  { name = "English", link = "/en/", lang = "en" },
  { name = "Deutsch", link = "/de/", lang = "de" }
]
```

## Guidance rules

- link should be absolute path or absolute URL.
- lang should use ISO 639-1 style code.
- For custom translation strings, use overrides partials for language files.
