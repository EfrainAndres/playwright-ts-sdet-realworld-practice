# Register

## Feature Name

Register

## URL

https://practice.expandtesting.com/register

## Feature Overview

The register page provides Username, Password, Confirm Password, and Register controls for practicing registration scenarios.

## Business Value

Registration validation protects account creation from incomplete or inconsistent inputs and gives users clear feedback when a submission cannot be accepted.

## User Story

As a new user, I want to enter registration details so that I can create an account when the submitted values are valid.

## Acceptance Criteria

Scenario: Page loads

Given the user navigates to the register page
When the page finishes loading
Then Username, Password, Confirm Password, and Register should be visible

Scenario: Valid registration attempt

Given the user is on the register page
When the user enters a username
And the user enters a password
And the user enters the same value in Confirm Password
And the user clicks Register
Then the registration result should be visible
And the exact expected message should be confirmed during implementation

Scenario: Password confirmation mismatch

Given the user is on the register page
When the user enters a password
And the user enters a different Confirm Password value
And the user clicks Register
Then a validation or error message should be visible
And the exact expected message should be confirmed during implementation

## Manual Test Scenarios

- Verify the page loads and all expected controls are present.
- Submit matching password and confirmation values.
- Submit mismatched password and confirmation values.
- Submit with missing username.
- Submit with missing password.
- Submit with missing confirmation.

## Positive Scenarios

- Valid username with matching password and confirmation.

## Negative Scenarios

- Blank username.
- Blank password.
- Blank confirm password.
- Password and confirm password do not match.

## Edge Cases

- Very short username.
- Very long username.
- Password with symbols.
- Leading or trailing spaces.
- Reusing a username, if the application persists registration data.

## Suggested Automation Coverage

- Verify controls are visible.
- Validate successful registration behavior after confirming expected result.
- Validate mismatched password behavior after confirming expected message.
- Validate required-field behavior after confirming expected messages.

## Suggested Test Data

- Username: `practice_user_<timestamp>`
- Password: `SuperSecretPassword!`
- Confirm Password: matching and non-matching values

## Out Of Scope

- Email verification.
- Real account lifecycle management.
- Login after registration unless manually confirmed as supported.

## Notes For Playwright Implementation Later

- Generate unique usernames if the application stores submitted users.
- Confirm whether registration creates a persistent user before automating repeatable tests.
- Do not hardcode generated usernames in specs.

