# UI-002 Register

## Ticket Title

Automate register page validation scenarios

## Objective

Validate the register page controls and automate registration behavior after confirming exact application messages.

## Scope

- Register page load.
- Required controls.
- Matching password and confirmation.
- Mismatched password and confirmation.
- Required-field behavior.

## Preconditions

- URL: https://practice.expandtesting.com/register
- Expected result messages must be confirmed manually before implementation.

## Acceptance Criteria

- Username, Password, Confirm Password, and Register are visible.
- Matching password and confirmation can be submitted.
- Mismatched password and confirmation shows a visible validation or error result.
- Missing required values are handled by the page.

## Test Scenarios

- Verify page controls.
- Submit valid registration data.
- Submit mismatched passwords.
- Submit empty username.
- Submit empty password.
- Submit empty confirmation.

## Suggested Priority

P1

## Suggested Tags

`@regression`, `@negative`, `@forms`

## Suggested Files To Create Later

- `tests/ui/register.spec.ts`
- `pages/register.page.ts`
- `test-data/register-data.json`

## Definition Of Done

- Exact expected messages are confirmed before assertions are added.
- Tests generate repeatable data.
- Positive and negative flows are covered.
- Tests do not depend on previously registered users unless cleanup exists.

