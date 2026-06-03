# Login

## Feature Name

Login

## URL

https://practice.expandtesting.com/login

## Feature Overview

The login page allows a user to submit a username and password. Valid credentials redirect the user to `/secure`. Invalid credentials keep the user on the login page and display an error message.

## Business Value

Login is a core authentication flow. It should reliably allow valid users into the secure area and clearly reject invalid credentials.

## User Story

As a user with valid credentials, I want to log in to the secure area so that I can access protected content.

## Acceptance Criteria

Scenario: Successful login

Given the user is on the login page
When the user enters username `practice`
And the user enters password `SuperSecretPassword!`
And the user clicks Login
Then the user should be redirected to `/secure`
And the message `You logged into a secure area!` should be visible
And a Logout button should be visible

Scenario: Invalid username

Given the user is on the login page
When the user enters an invalid username
And the user enters password `SuperSecretPassword!`
And the user clicks Login
Then the message `Invalid username.` should be visible
And the user should remain on the login page

Scenario: Invalid password

Given the user is on the login page
When the user enters username `practice`
And the user enters an invalid password
And the user clicks Login
Then the message `Invalid password.` should be visible
And the user should remain on the login page

## Manual Test Scenarios

- Verify the login page loads and shows Username, Password, and Login.
- Verify successful login with documented valid credentials.
- Verify invalid username error handling.
- Verify invalid password error handling.
- Verify failed login does not redirect to `/secure`.

## Positive Scenarios

- Valid username and valid password redirects to the secure area.
- Logout button is visible after successful login.

## Negative Scenarios

- Invalid username with valid password displays `Invalid username.`
- Valid username with invalid password displays `Invalid password.`
- Empty fields should be checked manually. Expected message should be confirmed during implementation.

## Edge Cases

- Leading or trailing spaces in username or password.
- Repeated failed login attempts.
- Case sensitivity for username and password.

## Suggested Automation Coverage

- P0 smoke test for valid login.
- P0 negative test for invalid username.
- P0 negative test for invalid password.
- Optional edge tests for blank fields and whitespace after manual confirmation.

## Suggested Test Data

- Valid username: `practice`
- Valid password: `SuperSecretPassword!`
- Invalid username: `wrongUser`
- Invalid password: `WrongPassword`

## Out Of Scope

- Account lockout behavior.
- Password reset behavior.
- Session expiration.
- Security penetration testing.

## Notes For Playwright Implementation Later

- Prefer role and label locators for fields and buttons.
- Assert the URL contains `/secure` after successful login.
- Assert visible flash messages for success and failures.
- Store credentials in shared test data later.

