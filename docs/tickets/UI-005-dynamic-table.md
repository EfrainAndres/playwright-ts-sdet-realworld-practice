# UI-005 Dynamic Table

## Ticket Title

Automate Chrome CPU comparison in dynamic table

## Objective

Validate that the Chrome CPU value in the Task Manager table matches the yellow Chrome CPU label, even when row or column order changes.

## Scope

- Dynamic table load.
- Header-based CPU column lookup.
- Name-based Chrome row lookup.
- Comparison with yellow label.

## Preconditions

- URL: https://practice.expandtesting.com/dynamic-table
- Table rows and columns may change order on reload.
- Cell values are random.

## Acceptance Criteria

- Task Manager table is visible.
- Chrome row can be found without using a fixed row index.
- CPU column can be found without using a fixed column index.
- Chrome CPU cell value matches the `Chrome CPU:` label.

## Test Scenarios

- Compare Chrome CPU value with label.
- Reload page and repeat comparison.
- Validate selector logic does not depend on fixed row or column position.

## Suggested Priority

P1

## Suggested Tags

`@regression`, `@tables`, `@dynamic-data`

## Suggested Files To Create Later

- `tests/ui/dynamic-table.spec.ts`
- `pages/dynamic-table.page.ts`

## Definition Of Done

- Test reads table data dynamically.
- Test compares page-generated values at runtime.
- Test avoids hardcoded CPU values.
- Test remains stable after page reload.

