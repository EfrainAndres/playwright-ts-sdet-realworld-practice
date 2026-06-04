# playwright-ts-sdet-realworld-practice

This project is a real-world SDET practice repository for learning Playwright with TypeScript against the ExpandTesting practice application:

https://practice.expandtesting.com/

The current phase is documentation-first. No UI automation tests, Page Objects, API tests, or Axe accessibility tests are implemented yet.

## Purpose

The goal is to practice how a professional SDET prepares automation work before writing code:

- Analyze application behavior.
- Document user stories and acceptance criteria.
- Define manual scenarios and risk coverage.
- Convert features into automation-ready tickets.
- Plan selectors, test data, flaky test prevention, and framework structure.

This creates a clean foundation so the UI automation can be implemented later with intention instead of guessing from the page while coding.

## Planned Tech Stack

- Playwright
- TypeScript
- GitHub Actions
- Axe accessibility testing later
- API testing later

## Project Phases

| Phase | Focus | Status |
| --- | --- | --- |
| Phase 1 | Folder structure, README, documentation, user stories, acceptance criteria, manual scenarios, automation backlog | Automated |
| Phase 2 | UI automation with Playwright TypeScript | Current |
| Phase 3 | Page Object Model and reusable fixtures | Later |
| Phase 4 | API testing | Later |
| Phase 5 | Axe accessibility checks | Later |
| Phase 6 | CI/CD execution and reporting | Later |

## Folder Structure

```text
tests/
  ui/
  api/
  accessibility/
pages/
fixtures/
utils/
test-data/
docs/
  user-stories/
  tickets/
  qa-notes/
.github/
  workflows/
```

## How To Use This Repo

Start with `docs/ui-automation-backlog.md` and choose a ticket. For each ticket:

1. Read the matching user story in `docs/user-stories/`.
2. Review the ticket scope in `docs/tickets/`.
3. Confirm the current page behavior manually in the browser.
4. Identify stable selectors using `docs/qa-notes/selector-strategy.md`.
5. Prepare test data using `docs/qa-notes/test-data-strategy.md`.
6. Automate only the scenarios that are valuable, stable, and repeatable.

## Current Phase Boundary

This repository intentionally contains documentation and empty implementation folders only. The next phase is for you to write the UI automation yourself using Playwright TypeScript.

