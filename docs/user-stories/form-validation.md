# Form Validation

## Feature Name

Form Validation

## URL

https://practice.expandtesting.com/form-validation

## Feature Overview

The form validation page contains Contact Name, Contact number, PickUp Date, Payment Method, and Register controls. The page displays validation messages for required or invalid inputs.

## Business Value

Form validation prevents incomplete or invalid submissions and gives users clear feedback before a transaction or registration is accepted.

## User Story

As a user submitting a form, I want required fields to validate my input so that I can correct mistakes before submitting.

## Acceptance Criteria

Scenario: Page loads

Given the user navigates to the form validation page
When the page finishes loading
Then Contact Name, Contact number, PickUp Date, Payment Method, and Register should be visible

Scenario: Missing contact name

Given the user is on the form validation page
When the user submits the form without Contact Name
Then the message `Please enter your Contact name.` should be visible

Scenario: Missing contact number

Given the user is on the form validation page
When the user submits the form without Contact number
Then the message `Please provide your Contact number.` should be visible

Scenario: Invalid or missing pickup date

Given the user is on the form validation page
When the user submits the form without a valid PickUp Date
Then the message `Please provide valid Date.` should be visible

Scenario: Missing payment method

Given the user is on the form validation page
When the user submits the form without selecting a payment method
Then the message `Please select the Paymeny Method.` should be visible

Scenario: Valid submission

Given the user completes all required fields with valid data
When the user clicks Register
Then the form should submit successfully
And the exact expected success message should be confirmed during implementation

## Manual Test Scenarios

- Verify all fields and the Register button are visible.
- Submit with all fields empty.
- Submit with one missing field at a time.
- Submit with valid values for every field.
- Verify both payment options, cash on delivery and card, can be selected.

## Positive Scenarios

- Complete form with valid contact name, contact number, pickup date, and payment method.
- Select cash on delivery.
- Select card.

## Negative Scenarios

- Missing Contact Name.
- Missing Contact number.
- Missing PickUp Date.
- Missing Payment Method.
- Invalid date value if the control allows typing.

## Edge Cases

- Contact name with spaces or special characters.
- Contact number with non-numeric characters.
- Past pickup date, if the page validates it.
- Very long contact name.

## Suggested Automation Coverage

- P0 validation test for empty required fields.
- P0 valid form completion after confirming success behavior.
- P1 one-field-at-a-time validation coverage.
- P1 payment method option selection.

## Suggested Test Data

- Contact Name: `Alex Morgan`
- Contact number: `5551234567`
- PickUp Date: a valid future date
- Payment Method: `cash on delivery` and `card`

## Out Of Scope

- Payment processing.
- Backend order creation.
- Date timezone validation beyond what the page visibly supports.

## Notes For Playwright Implementation Later

- Check whether the page uses native browser validation, Bootstrap validation, or visible DOM messages.
- Use form labels and option text for selectors.
- Keep valid form data in `test-data/` later.

