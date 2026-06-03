# File Upload

## Feature Name

File Upload

## URL

https://practice.expandtesting.com/upload

## Feature Overview

The file upload page allows users to choose or drag and drop a file and then click Upload. The page states that only a file less than 500KB will be accepted.

## Business Value

File upload is a common workflow. The feature should accept valid files and reject files that violate documented constraints.

## User Story

As a user, I want to upload a valid file so that the application can receive my selected file.

## Acceptance Criteria

Scenario: Page loads

Given the user navigates to the upload page
When the page finishes loading
Then the file chooser or drop area should be visible
And the Upload button should be visible

Scenario: Upload file less than 500KB

Given the user is on the upload page
When the user selects a file less than 500KB
And the user clicks Upload
Then the upload result should indicate success
And the exact expected success message should be confirmed during implementation

Scenario: Reject file 500KB or larger

Given the user is on the upload page
When the user selects a file that is 500KB or larger
And the user clicks Upload
Then the upload should not be accepted
And the exact expected error message should be confirmed during implementation

## Manual Test Scenarios

- Verify the page displays upload guidance and the Upload button.
- Upload a small `.txt` file under 500KB.
- Try uploading a file at or above 500KB.
- Try clicking Upload without selecting a file.
- If supported manually, drag and drop a valid file.

## Positive Scenarios

- File less than 500KB uploads successfully.
- File chooser interaction selects the file.

## Negative Scenarios

- Oversized file should be rejected.
- Empty submission should be handled. Expected message should be confirmed during implementation.

## Edge Cases

- File size just below 500KB.
- File size exactly 500KB.
- File size just above 500KB.
- Filename with spaces.
- Different file extensions such as `.txt`, `.csv`, and `.png`.

## Suggested Automation Coverage

- P0 upload a valid small file.
- P1 reject oversized file after confirming exact message.
- P1 empty upload behavior after confirming exact message.

## Suggested Test Data

- `small-upload.txt`, less than 500KB.
- `large-upload.txt`, 500KB or larger.
- Optional file with spaces in the filename.

## Out Of Scope

- Malware scanning.
- File content validation beyond size and accepted upload behavior.
- Backend storage verification.

## Notes For Playwright Implementation Later

- Use Playwright file upload support.
- Create fixture files in `test-data/` later.
- Keep file sizes deterministic.
- Confirm the exact success and error messages before asserting them.

