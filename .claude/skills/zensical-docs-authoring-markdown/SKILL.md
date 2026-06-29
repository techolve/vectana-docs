---
name: zensical-docs-authoring-markdown
description: Explain markdown authoring conventions in Zensical, including linking rules and page-title resolution behavior.
---

# Zensical Docs: Authoring markdown

Use this skill when the user asks about writing markdown content correctly for Zensical projects.

## Scope

This skill is based on:

- https://zensical.org/docs/authoring/markdown/

## What to cover

- Markdown dialect used by Zensical
- Linking rules between pages
- Page title precedence and limitations
- Key compatibility notes with Material for MkDocs

## Core principles

- Zensical uses Python Markdown for compatibility with Material for MkDocs.
- Prefer relative links to markdown source paths, not built HTML paths.
- Avoid absolute internal links when possible to keep content portable across site_url changes.

## Linking recommendation

Preferred:

```markdown
See [Setup basics](../setup/basics.md).
```

Avoid:

```markdown
See [Setup basics](/setup/basics/).
See [Setup basics](../setup/basics.html).
```

## Page title precedence

Order of priority:

1. Title explicitly defined in nav
2. Title in front matter
3. First level heading in markdown
4. File basename fallback

## Compatibility notes

- Python Markdown differs from CommonMark in some parsing rules (for example list behavior and indentation requirements).
- Zensical documents current title behavior and temporary differences while navigation is being redesigned.

## Guidance rules

- When debugging broken links, first check that links target markdown files relative to source.
- For stable titles, suggest setting nav titles and front matter explicitly.
