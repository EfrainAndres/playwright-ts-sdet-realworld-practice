# Selector Strategy

Use selectors that represent how a user understands the page.

## Preferred Selectors

- `getByRole()` for buttons, links, headings, tables, rows, and form controls with accessible names.
- `getByLabel()` for labeled inputs and form controls.
- `getByPlaceholder()` when placeholders are stable and meaningful.
- `getByText()` for stable user-visible messages.
- `data-testid`, `data-test`, or similar attributes if the page provides them.

## Avoid When Possible

- Brittle CSS chains tied to layout.
- XPath unless there is no reliable alternative.
- Dynamic IDs.
- Selectors based on element order only.
- Text that is likely to change for marketing or layout reasons.

## Page Objects Later

When Page Objects are introduced, keep selectors in `pages/` instead of spreading them through test files. Tests should read like business scenarios, while Page Objects handle page-specific interaction details.

