# Test Strategy

## Risk-Based Testing

Automation should start with the features where failure would be most visible or most likely to break core user journeys. Login and forms are higher priority because they validate common business flows and error handling. Dynamic tables are valuable next because they exercise non-trivial locator and data extraction skills.

## UI Automation Strategy

UI tests should validate user-visible outcomes:

- Correct navigation or redirect.
- Visible success or error messages.
- Form validation behavior.
- Table values matching expected page indicators.
- Control state changes after user interaction.

Tests should avoid asserting implementation details unless no user-facing signal exists.

## Smoke vs Regression

Smoke tests should cover the smallest high-confidence path through critical features. Regression tests should include positive, negative, and edge scenarios after smoke coverage is stable.

Suggested smoke candidates:

- Valid login.
- Invalid login error handling.
- Required field validation on forms.
- Successful small file upload.

## Positive, Negative, And Edge Cases

Positive scenarios confirm the feature works with valid inputs. Negative scenarios confirm useful handling of invalid or missing inputs. Edge cases cover boundaries such as empty fields, oversized files, changing table order, or uncommon dropdown selections.

## Test Data Approach

Use known valid data only where the site provides it. For data not documented by the page, confirm behavior manually before automating. Store reusable data in `test-data/` later, preferably as JSON.

## Selector Strategy

Prefer resilient user-facing locators such as role, label, placeholder, and text. If the page provides stable test attributes, use them. Avoid dynamic IDs, brittle CSS chains, and XPath unless there is no better option.

## Flaky Test Prevention

Use Playwright web-first assertions and wait for visible outcomes rather than fixed sleeps. Tests should be independent and should not depend on execution order.

## What To Automate First

Automate in this order:

1. P0 smoke paths that prove core workflows.
2. Negative validation scenarios with clear expected messages.
3. Dynamic behavior that requires table lookup, filtering, pagination, or state verification.
4. Broader regression and edge coverage.

