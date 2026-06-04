# UI-001 Login

## Ticket Title

Automate login success and failure scenarios

## Objective

Validate that the login page accepts known valid credentials, redirects to `/secure`, and displays the real application messages for missing username and invalid password validation.

## Scope

- Login page load.
- Successful login.
- Missing username validation.
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
- Missing username shows `Your username is invalid!`
- Invalid password shows `Your password is invalid!`
- Failed login remains on the login page.

## Test Scenarios

- Login with valid credentials.
- Login with missing username.
- Login with invalid password.
- Do not use `wrongUser` as the username validation scenario because the actual app routes that input to password validation behavior.

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

## Implementation Notes:
- The real app error messages differ from the initially documented examples.
- Missing username displays "Your username is invalid!".
- Invalid password displays "Your password is invalid!".
- A wrong username with valid password routes to password validation behavior, so the automated username validation scenario uses an empty username.
- Tests were validated across Chromium, Firefox, and WebKit.


Note: The visible app behavior differs from the original page documentation. The automated tests follow the actual application messages returned by the UI: `Your username is invalid!` for an empty username and `Your password is invalid!` for an invalid password.
