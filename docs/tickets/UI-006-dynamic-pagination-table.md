# UI-006 Dynamic Pagination Table

## Ticket Title

Automate student table pagination, sorting, and filtering

## Objective

Validate that the DataTables-based student table supports visible row changes, search/filtering, sorting, and pagination.

## Scope

- Table load.
- Header visibility.
- Rows per page.
- Search/filter.
- Sort.
- Pagination.

## Preconditions

- URL: https://practice.expandtesting.com/dynamic-pagination-table
- Student data is displayed in a dynamic table.
- Static record expectations should be confirmed during implementation.

## Acceptance Criteria

- Student table headers are visible.
- Changing rows per page updates the displayed rows.
- Filtering displays matching records.
- Sorting changes visible row order.
- Pagination navigates to another set of records.

## Test Scenarios

- Verify table headers.
- Change visible row count.
- Filter by a visible value.
- Sort Student Name.
- Navigate next and previous.
- Search for a value that does not exist.

## Suggested Priority

P1

## Suggested Tags

`@regression`, `@tables`, `@pagination`, `@filtering`

## Suggested Files To Create Later

- `tests/ui/dynamic-pagination-table.spec.ts`
- `pages/dynamic-pagination-table.page.ts`

## Definition Of Done

- Tests wait for table updates.
- Tests do not depend on unstable row order unless sorting is being tested.
- Filtering, sorting, and pagination assertions are user-visible.
- Any static expected data is confirmed manually first.

