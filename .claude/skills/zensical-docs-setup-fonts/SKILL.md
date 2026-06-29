---
name: zensical-docs-setup-fonts
description: Configure text and code fonts, disable remote loading, and self-host custom fonts.
---

# Zensical Docs: Setup fonts

Use this skill when the user asks about typography and font loading policy.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/fonts/

## Key configuration

```toml
[project.theme]
font.text = "Inter"
font.code = "JetBrains Mono"
```

Disable Google Fonts autoloading:

```toml
[project.theme]
font = false
```

## Custom font loading

Use additional CSS with @font-face and map CSS variables:

- --md-text-font
- --md-code-font

## Guidance rules

- Use font = false when privacy constraints disallow remote font requests.
- Prefer self-hosted font assets for strict compliance environments.
