# Framework Overview

## Current State

This project is in Phase 1. The repository contains the planned folder structure and documentation needed to guide future automation, but no automation implementation has been added yet.

## Planned Structure

```text
tests/
  ui/              # Future UI specs
  api/             # Future API specs
  accessibility/   # Future Axe accessibility specs
pages/             # Future Page Object classes
fixtures/          # Future Playwright fixtures and shared setup
utils/             # Future helper utilities
test-data/         # Future JSON or typed data files
docs/              # Stories, tickets, QA notes, and strategy
```

## Future UI Layer

UI tests will target user-visible behavior on ExpandTesting pages. The first tests should focus on stable, high-value flows such as login, form validation, and file upload before expanding into dynamic tables and control-heavy pages.

## Future API Layer

API tests are planned for a later phase. They should live separately under `tests/api/` so API coverage does not become mixed with browser-driven UI coverage.

## Future Accessibility Layer

Axe accessibility checks are planned for a later phase under `tests/accessibility/`. They should be added after the basic UI framework is stable.

## Future Page Object Model

Page Objects will live in `pages/` later. They should contain selectors and page-specific actions, while test files should focus on scenarios and assertions.

## Future Fixtures

Fixtures will live in `fixtures/` and can later provide shared setup such as authenticated sessions, common navigation, test users, and reusable browser context configuration.

## Future Test Data

Test data will live in `test-data/` and should be kept outside test files. Data should be organized by feature and environment where needed.

## Future CI/CD

GitHub Actions workflows will live in `.github/workflows/` later. CI should eventually run smoke tests first, then broader regression suites when the suite becomes larger.

## Why Docs First

Starting with documentation makes the automation more realistic. Senior SDETs clarify behavior, risk, test data, acceptance criteria, and automation value before writing code. This reduces rework and creates artifacts that are useful in interviews, sprint planning, and test reviews.

