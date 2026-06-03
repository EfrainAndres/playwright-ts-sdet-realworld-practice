# Dynamic Pagination Table

## Feature Name

Dynamic Pagination Table

## URL

https://practice.expandtesting.com/dynamic-pagination-table

## Feature Overview

The page contains a dynamic, paginated student data table using DataTables. The table includes Student Name, Gender, Class Level, Home State, Major, and Extracurricular Activity. Users can change visible rows, sort, filter, and paginate.

## Business Value

Paginated tables are common in real applications. Testing them builds skill in filtering, sorting, pagination, and validating records across changing table states.

## User Story

As a user viewing student data, I want to search, sort, paginate, and change visible rows so that I can inspect table records efficiently.

## Acceptance Criteria

Scenario: Table loads

Given the user navigates to the dynamic pagination table page
When the table loads
Then the student table headers should be visible

Scenario: Change visible rows

Given the table is visible
When the user changes the visible rows option
Then the table should update the number of displayed rows accordingly

Scenario: Search or filter records

Given the table is visible
When the user enters a filter value
Then the table should display matching records
And non-matching records should be hidden

Scenario: Sort by column

Given the table is visible
When the user sorts a column
Then the visible rows should be ordered by that column

Scenario: Pagination

Given there are more records than the visible row limit
When the user moves to the next page
Then a different page of table records should be displayed

## Manual Test Scenarios

- Verify the table headers are visible.
- Change rows per page to an available option such as 3, 5, or more.
- Search for a visible student-related value.
- Sort by Student Name.
- Navigate to the next page and previous page.

## Positive Scenarios

- Rows per page updates the displayed row count.
- Search returns matching records.
- Sorting changes row order.
- Pagination controls navigate between pages.

## Negative Scenarios

- Search for a value that does not exist.
- Attempt to go previous while on the first page, if the control is disabled.
- Attempt to go next while on the last page, if the control is disabled.

## Edge Cases

- Search with partial text.
- Search with different casing.
- Change rows per page after filtering.
- Sort after filtering.

## Suggested Automation Coverage

- Verify headers and initial table visibility.
- Validate rows-per-page behavior.
- Validate search/filter behavior.
- Validate sorting for one stable column.
- Validate next and previous pagination.

## Suggested Test Data

Use visible table data read from the page at runtime. Static student records should be confirmed during implementation before being hardcoded.

## Out Of Scope

- Validating every student record.
- Testing DataTables library internals.
- Backend data persistence.

## Notes For Playwright Implementation Later

- Prefer table roles and header text.
- Read rows dynamically instead of assuming fixed order.
- Use assertions that wait for table updates after filtering or pagination.

