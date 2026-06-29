---
name: zensical-docs-setup-footer
description: Configure footer navigation, social links, copyright, and generator notice.
---

# Zensical Docs: Setup footer

Use this skill when the user asks to customize footer content and navigation links.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/footer/

## Key configuration

Footer previous/next navigation:

```toml
[project.theme]
features = ["navigation.footer"]
```

Social link:

```toml
[[project.extra.social]]
icon = "fontawesome/brands/x-twitter"
link = "https://x.com/zensical"
name = "Zensical on X"
```

Copyright and generator:

```toml
[project]
copyright = "Copyright ..."

[project.extra]
generator = false
```

Hide prev/next for a page:

```yaml
---
hide:
  - footer
---
```

## Guidance rules

- social.icon must be a valid bundled icon path.
- social.link should include URI scheme.
