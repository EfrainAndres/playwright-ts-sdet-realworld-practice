# UI-004 Form Validation

## Ticket Title

Automate form validation required-field and valid-submit scenarios

## Objective

Validate required-field messages and successful completion behavior on the form validation page.

## Scope

- Contact Name.
- Contact number.
- PickUp Date.
- Payment Method.
- Register button.
- Required and valid submission behavior.

## Preconditions

- URL: https://practice.expandtesting.com/form-validation
- Visible validation messages are documented on the page.

## Acceptance Criteria

- Missing Contact Name shows `Please enter your Contact name.`
- Missing Contact number shows `Please provide your Contact number.`
- Contact number values that do not match `NNN-NNNNNNN` show `Please provide your Contact number.`
- Missing or invalid PickUp Date shows `Please provide valid Date.`
- Missing Payment Method shows `Please select the Paymeny Method.`
- Failed validation keeps the user on `/form-validation`.
- Valid data redirects the user to `/form-confirmation`.
- Successful submission shows `Thank you for validating your ticket`.

## Test Scenarios

- Submit empty form.
- Submit with missing Contact Name.
- Submit with missing Contact number.
- Submit with invalid Contact number format.
- Submit with missing PickUp Date.
- Submit with missing Payment Method.
- Submit valid form with cash on delivery.
- Submit valid form with card.

## Suggested Priority

P0

## Suggested Tags

`@smoke`, `@regression`, `@negative`, `@forms`

## Suggested Files To Create Later

- `tests/ui/form-validation.spec.ts`
- `pages/form-validation.page.ts`
- `test-data/form-validation-data.json`

## Definition Of Done

- Required-field validations are automated.
- At least one valid submission path is automated after confirmation.
- Tests use labels and option text.
- Data is centralized in `test-data/`.
