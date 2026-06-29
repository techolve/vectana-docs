---
name: zensical-docs-setup-data-privacy
description: Configure cookie consent and custom cookie behavior for privacy compliance.
---

# Zensical Docs: Setup data privacy

Use this skill when the user asks for consent banners, cookie controls, or privacy-safe analytics integration.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/data-privacy/

## Key configuration

Cookie consent:

```toml
[project.extra.consent]
title = "Cookie consent"
description = "..."
actions = ["accept", "manage"]
```

Cookie labels and defaults:

```toml
[project.extra.consent.cookies]
analytics.name = "Google Analytics"
checked = false
```

Footer link to reopen settings:

```toml
[project]
copyright = "<a href=\"#__consent\">Change cookie settings</a>"
```

## Custom cookie handling

Use additional JavaScript and inspect consent via **md_get("**consent").

## Guidance rules

- Keep consent text explicit and user-facing.
- Integrate with analytics features so no tracking runs before consent.
