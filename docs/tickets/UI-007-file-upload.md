# UI-007 File Upload

## Ticket Title

Automate valid and invalid file upload scenarios

## Objective

Validate that the upload page accepts files less than 500KB and rejects files that do not meet the documented size constraint.

## Scope

- Upload page load.
- File chooser upload.
- Valid file under 500KB.
- Oversized file rejection after confirming message.
- Empty upload behavior after confirming message.

## Preconditions

- URL: https://practice.expandtesting.com/upload
- Page states that only a file less than 500KB will be accepted.
- Test fixture files should be created later in `test-data/`.

## Acceptance Criteria

- Upload button is visible.
- File selection control or drop area is available.
- A file less than 500KB is accepted.
- A file 500KB or larger is rejected.
- Exact success and error messages are confirmed before automation assertions are finalized.

## Test Scenarios

- Upload small valid file.
- Upload file exactly at the boundary if feasible.
- Upload oversized file.
- Click Upload with no file selected.

## Suggested Priority

P0

## Suggested Tags

`@smoke`, `@regression`, `@negative`, `@upload`

## Suggested Files To Create Later

- `tests/ui/file-upload.spec.ts`
- `pages/file-upload.page.ts`
- `test-data/uploads/small-upload.txt`
- `test-data/uploads/large-upload.txt`

## Definition Of Done

- Fixture files are deterministic.
- Valid and invalid upload scenarios are automated.
- Exact messages are confirmed before assertions are added.
- Tests cleanly use Playwright file upload APIs.

