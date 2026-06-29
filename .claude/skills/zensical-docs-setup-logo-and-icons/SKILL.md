---
name: zensical-docs-setup-logo-and-icons
description: Configure logo, favicon, site icons, and custom icon packs in Zensical.
---

# Zensical Docs: Setup logo and icons

Use this skill when the user asks to brand documentation visuals with logos and icons.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/logo-and-icons/

## Key configuration

Logo as file:

```toml
[project.theme]
logo = "images/logo.png"
```

Logo as icon:

```toml
[project.theme.icon]
logo = "lucide/smile"
```

Favicon:

```toml
[project.theme]
favicon = "images/favicon.png"
```

Site icons example:

```toml
[project.theme.icon]
previous = "fontawesome/solid/angle-left"
next = "fontawesome/solid/angle-right"
```

## Custom icon sets

- Put SVG icons under overrides/.icons/<set>/
- Enable custom_dir and emoji custom_icons path

## Guidance rules

- In config icon paths, omit .svg extension.
- Markdown icon shortcode format differs from config path format.
