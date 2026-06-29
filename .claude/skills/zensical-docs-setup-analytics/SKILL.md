---
name: zensical-docs-setup-analytics
description: Configure Google Analytics integration and feedback widget behavior in Zensical.
---

# Zensical Docs: Setup analytics

Use this skill when the user asks for usage metrics, page feedback, or analytics integration.

## Scope

This skill is based on:

- https://zensical.org/docs/setup/analytics/

## Key configuration

Google Analytics 4:

```toml
[project.extra.analytics]
provider = "google"
property = "G-XXXXXXXXXX"
```

Feedback widget:

```toml
[project.extra.analytics.feedback]
title = "Was this page helpful?"
```

## Page-level hide

```yaml
---
hide:
  - feedback
---
```

## Guidance rules

- Feedback widget depends on analytics provider/property configuration.
- Respect cookie consent; do not display analytics-driven UI before consent.
- Use custom integration via overrides partial if non-GA provider is required.
