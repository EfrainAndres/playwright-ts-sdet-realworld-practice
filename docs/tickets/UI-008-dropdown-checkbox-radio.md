# UI-008 Dropdown, Checkbox, And Radio Controls

## Ticket Title

Automate dropdown, checkbox, and radio control interactions

## Objective

Validate that users can select dropdown values, toggle checkboxes, and choose radio button options on the relevant ExpandTesting pages.

## Scope

- Simple dropdown.
- Date of birth dropdowns.
- Elements per Page dropdown.
- Country dropdown.
- Checkbox 1 and Checkbox 2.
- Color and sport radio groups.

## Preconditions

- Primary dropdown URL: https://practice.expandtesting.com/dropdown
- Checkbox URL: https://practice.expandtesting.com/checkboxes
- Radio URL: https://practice.expandtesting.com/radio-buttons

## Acceptance Criteria

- Simple dropdown options can be selected.
- Country dropdown selection is retained.
- Elements per Page values can be selected.
- Checkboxes can be checked and unchecked.
- Radio selection checks the chosen option.
- Radio groups allow only one selected option within the same group.

## Test Scenarios

- Select Option 1 and Option 2.
- Select country values such as Colombia and United States.
- Select Elements per Page values.
- Toggle both checkboxes.
- Select each color radio button.
- Select each sport radio button.

## Suggested Priority

P2

## Suggested Tags

`@regression`, `@forms`, `@controls`

## Suggested Files To Create Later

- `tests/ui/dropdown.spec.ts`
- `tests/ui/checkboxes.spec.ts`
- `tests/ui/radio-buttons.spec.ts`
- `pages/dropdown.page.ts`
- `pages/checkboxes.page.ts`
- `pages/radio-buttons.page.ts`

## Definition Of Done

- Control states are asserted after interaction.
- Selectors use labels, roles, or stable option text.
- Tests avoid validating every country option.
- Broad control coverage is split if one spec becomes too large.

