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
And the user should remain on `/form-validation`

Scenario: Missing contact number

Given the user is on the form validation page
When the user submits the form without Contact number
Then the message `Please provide your Contact number.` should be visible
And the user should remain on `/form-validation`

Scenario: Invalid contact number format

Given the user is on the form validation page
When the user submits a Contact number that does not match `NNN-NNNNNNN`
Then the message `Please provide your Contact number.` should be visible
And the user should remain on `/form-validation`

Scenario: Invalid or missing pickup date

Given the user is on the form validation page
When the user submits the form without a valid PickUp Date
Then the message `Please provide valid Date.` should be visible
And the user should remain on `/form-validation`

Scenario: Missing payment method

Given the user is on the form validation page
When the user submits the form without selecting a payment method
Then the message `Please select the Paymeny Method.` should be visible
And the user should remain on `/form-validation`

Scenario: Valid submission

Given the user completes all required fields with valid data
When the user clicks Register
Then the user should be redirected to `/form-confirmation`
And the message `Thank you for validating your ticket` should be visible

## Manual Test Scenarios

- Verify all fields and the Register button are visible.
- Submit with all fields empty.
- Submit with one missing field at a time.
- Submit a contact number that does not match `NNN-NNNNNNN`.
- Submit with valid values for every field.
- Verify both payment options, cash on delivery and card, can be selected.

## Positive Scenarios

- Complete form with valid contact name, contact number, pickup date, and payment method.
- Select cash on delivery.
- Select card.

## Negative Scenarios

- Missing Contact Name.
- Missing Contact number.
- Contact number that does not match `NNN-NNNNNNN`.
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
- P1 invalid contact number format coverage.
- P1 payment method option selection.

## Suggested Test Data

- Contact Name: `Alex Morgan`
- Contact number: `555-1234567`
- PickUp Date: a valid future date
- Payment Method: `cash on delivery` and `card`

## Out Of Scope

- Payment processing.
- Backend order creation.
- Date timezone validation beyond what the page visibly supports.

## Notes For Playwright Implementation Later

- The page uses native constraint validation with Bootstrap feedback messages.
- The Contact number requires the pattern `NNN-NNNNNNN`.
- Use form labels and option text for selectors.
- Keep valid form data in `test-data/` later.
