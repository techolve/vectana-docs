---
name: zensical-docs-setup-comment-system
description: Integrate third-party comments via template overrides, with Giscus as reference implementation.
---

# Zensical Docs: Setup comment system

Use this skill when the user asks to add page comments or discussion embeds.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/comment-system/

## Recommended approach

- Override partials/comments.html
- Insert provider script (example: Giscus)
- Enable per-page comments in front matter

Enable comments on a page:

```yaml
---
comments: true
---
```

## Guidance rules

- Keep integration in overrides partial rather than markdown body.
- If palette sync is needed, forward color-scheme changes to embedded frame.
- Repository for comments backend can be separate from docs repository.
