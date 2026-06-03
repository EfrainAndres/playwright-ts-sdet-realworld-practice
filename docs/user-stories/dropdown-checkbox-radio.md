# Dropdown, Checkbox, And Radio Controls

## Feature Name

Dropdown, Checkbox, And Radio Controls

## URL

Primary dropdown URL: https://practice.expandtesting.com/dropdown

Related checkbox URL: https://practice.expandtesting.com/checkboxes

Related radio URL: https://practice.expandtesting.com/radio-buttons

## Feature Overview

The dropdown page provides a simple dropdown, date of birth dropdowns, an Elements per Page dropdown, and country selection. Related ExpandTesting pages provide sample checkboxes and radio button groups.

## Business Value

Dropdowns, checkboxes, and radio buttons are common form controls. Users should be able to select options and have the page preserve the selected state.

## User Story

As a user completing forms, I want to select dropdown options, toggle checkboxes, and choose radio buttons so that I can provide structured input.

## Acceptance Criteria

Scenario: Select simple dropdown option

Given the user is on the dropdown page
When the user selects Option 1 or Option 2
Then the selected option should remain selected

Scenario: Select date of birth values

Given the user is on the dropdown page
When the user selects date of birth values
Then the selected values should remain selected

Scenario: Select country

Given the user is on the dropdown page
When the user selects a country
Then the selected country should remain selected

Scenario: Toggle checkboxes

Given the user is on the checkboxes page
When the user toggles Checkbox 1 or Checkbox 2
Then the checkbox checked state should update

Scenario: Select radio button

Given the user is on the radio buttons page
When the user selects one color or sport option
Then the selected radio button should be checked
And other options in the same group should not be selected

## Manual Test Scenarios

- Select Option 1 and Option 2 from the simple dropdown.
- Select a country such as Colombia or United States.
- Change Elements per Page between available options.
- Toggle Checkbox 1 and Checkbox 2.
- Select each color radio option.
- Select each sport radio option.

## Positive Scenarios

- Dropdown options can be selected.
- Country dropdown accepts a selected country.
- Checkboxes can be checked and unchecked.
- Radio buttons enforce one selected option per group.

## Negative Scenarios

- Attempt to submit or continue without selection if a submit flow exists. Expected behavior should be confirmed during implementation.
- Verify selecting one radio option clears another option in the same group.

## Edge Cases

- Selecting the first and last country in the country dropdown.
- Re-selecting an already selected option.
- Rapidly toggling checkboxes.
- Changing radio selection multiple times.

## Suggested Automation Coverage

- Select and assert simple dropdown option.
- Select and assert country.
- Toggle and assert checkbox states.
- Select and assert radio buttons by visible label.
- Validate radio mutual exclusivity within each group.

## Suggested Test Data

- Simple dropdown: `Option 1`, `Option 2`
- Elements per Page: `10`, `20`, `50`, `100`
- Country: `Colombia`, `United States`
- Checkboxes: `Checkbox 1`, `Checkbox 2`
- Colors: `Blue`, `Red`, `Yellow`, `Black`, `Green`
- Sports: `Basketball`, `Football`, `Tennis`

## Out Of Scope

- Submitting a larger form with these controls unless a submit action is added.
- Verifying every country option.
- Visual styling of controls.

## Notes For Playwright Implementation Later

- Use `selectOption` only when controls are native selects.
- Prefer labels and roles for checkbox and radio controls.
- Split this ticket into separate specs later if it becomes too broad.

