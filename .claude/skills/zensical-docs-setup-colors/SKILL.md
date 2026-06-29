---
name: zensical-docs-setup-colors
description: Configure Zensical palettes, toggles, and custom color schemes.
---

# Zensical Docs: Setup colors

Use this skill when the user asks to set theme colors, dark mode, or custom brand palette.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/colors/

## Key configuration

Color scheme and palette:

```toml
[project.theme.palette]
scheme = "default"
```

```toml
[project.theme]
palette.primary = "indigo"
palette.accent = "indigo"
```

Palette toggle:

```toml
[[project.theme.palette]]
scheme = "default"
toggle.icon = "lucide/sun"
toggle.name = "Switch to dark mode"

[[project.theme.palette]]
scheme = "slate"
toggle.icon = "lucide/moon"
toggle.name = "Switch to light mode"
```

## Custom colors

Set palette value to custom and override CSS variables in extra CSS.

## Guidance rules

- Use valid bundled icons for toggle or build fails.
- Prefer explicit toggle names for accessibility.
- Use CSS variables for brand-level customization.
