# UI-003 Forgot Password

## Ticket Title

Automate forgot password form scenarios

## Objective

Validate that the forgot password page displays the expected controls and handles valid and invalid email inputs.

## Scope

- Forgot password page load.
- Email field visibility.
- Retrieve password button visibility.
- Invalid email validation.
- Valid email submission after confirming expected message.

## Preconditions

- URL: https://practice.expandtesting.com/forgot-password
- Invalid email validation text visible on page: `Please enter a valid email address.`

## Acceptance Criteria

- E-mail field is visible.
- Retrieve password button is visible.
- Invalid email displays `Please enter a valid email address.`
- Valid email submission behavior is confirmed manually before automation asserts it.

## Test Scenarios

- Verify controls are visible.
- Submit invalid email.
- Submit empty email.
- Submit valid email.

## Suggested Priority

P1

## Suggested Tags

`@regression`, `@negative`, `@forms`

## Suggested Files To Create Later

- `tests/ui/forgot-password.spec.ts`
- `pages/forgot-password.page.ts`
- `test-data/forgot-password-data.json`

## Definition Of Done

- Invalid email validation is automated.
- Valid submission expected result is confirmed.
- Tests do not depend on real email delivery.
- Test data is reusable.

