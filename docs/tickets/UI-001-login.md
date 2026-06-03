# UI-001 Login

## Ticket Title

Automate login success and failure scenarios

## Objective

Validate that the login page accepts known valid credentials, redirects to `/secure`, and displays documented error messages for invalid credentials.

## Scope

- Login page load.
- Successful login.
- Invalid username.
- Invalid password.
- User remains on login page after failed login.

## Preconditions

- URL: https://practice.expandtesting.com/login
- Valid username: `practice`
- Valid password: `SuperSecretPassword!`

## Acceptance Criteria

- Valid login redirects to `/secure`.
- Success message `You logged into a secure area!` is visible.
- Logout button is visible after successful login.
- Invalid username shows `Invalid username.`
- Invalid password shows `Invalid password.`
- Failed login remains on the login page.

## Test Scenarios

- Login with valid credentials.
- Login with invalid username.
- Login with invalid password.
- Optional blank-field cases after confirming messages manually.

## Suggested Priority

P0

## Suggested Tags

`@smoke`, `@regression`, `@negative`, `@auth`

## Suggested Files To Create Later

- `tests/ui/login.spec.ts`
- `pages/login.page.ts`
- `pages/secure.page.ts`
- `test-data/login-data.json`

## Definition Of Done

- Positive and negative scenarios are automated.
- Tests use stable locators.
- Credentials are stored in shared test data.
- Assertions cover URL and visible messages.
- Tests pass locally and are ready for CI in a later phase.

