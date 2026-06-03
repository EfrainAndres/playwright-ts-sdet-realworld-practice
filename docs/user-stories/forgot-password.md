# Forgot Password

## Feature Name

Forgot Password

## URL

https://practice.expandtesting.com/forgot-password

## Feature Overview

The forgot password page allows a user to enter an email address and click Retrieve password. The page displays an email field and the visible validation text `Please enter a valid email address.`

## Business Value

Forgot password flows help users recover access. Validation should prevent invalid email submissions and guide users toward correct input.

## User Story

As a user who forgot my password, I want to submit my email address so that I can receive reset instructions.

## Acceptance Criteria

Scenario: Page loads

Given the user navigates to the forgot password page
When the page finishes loading
Then the E-mail field should be visible
And the Retrieve password button should be visible

Scenario: Invalid email validation

Given the user is on the forgot password page
When the user enters an invalid email address
And the user submits the form
Then the validation message `Please enter a valid email address.` should be visible

Scenario: Valid email submission

Given the user is on the forgot password page
When the user enters a valid email address
And the user clicks Retrieve password
Then the password reset result should be visible
And the exact expected message should be confirmed during implementation

## Manual Test Scenarios

- Verify page title and controls are visible.
- Submit a valid email format.
- Submit an invalid email format.
- Submit an empty email field.

## Positive Scenarios

- Valid email format can be submitted.

## Negative Scenarios

- Invalid email format displays `Please enter a valid email address.`
- Empty email should trigger required or validation behavior. Expected message should be confirmed during implementation.

## Edge Cases

- Email with plus alias.
- Email with subdomain.
- Email with leading or trailing spaces.
- Uppercase email characters.

## Suggested Automation Coverage

- Verify the email field and Retrieve password button are visible.
- Validate invalid email behavior.
- Validate successful submission only after confirming the result message.

## Suggested Test Data

- Valid email: `user@example.com`
- Plus alias: `user+reset@example.com`
- Invalid email: `not-an-email`
- Empty value: ``

## Out Of Scope

- Real email delivery.
- Token generation.
- Password reset completion flow.

## Notes For Playwright Implementation Later

- Use label or role-based locators for the email field and button.
- Do not assert email delivery.
- Confirm whether the page uses native browser validation or visible application text.

