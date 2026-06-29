---
name: zensical-docs-setup-header
description: Configure header behavior, announcement bar, and dismiss controls.
---

# Zensical Docs: Setup header

Use this skill when the user asks to control header motion and global announcements.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/header/

## Key configuration

Auto-hide header:

```toml
[project.theme]
features = ["header.autohide"]
```

Dismissible announcement:

```toml
[project.theme]
features = ["announce.dismiss"]
```

Announcement content is defined via theme block override for announce.

## Guidance rules

- Use announce block override for custom HTML message content.
- Use announce.dismiss for temporary notices users can acknowledge.
