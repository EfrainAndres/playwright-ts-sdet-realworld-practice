# Test Data Strategy

## Principles

- Keep test data outside test files.
- Use JSON files in `test-data/` later.
- Avoid hardcoding credentials in multiple specs.
- Use valid, invalid, and boundary data.
- Separate environment data from test scenario data.

## Login Data

The login page provides known valid credentials:

- Username: `practice`
- Password: `SuperSecretPassword!`

Invalid username and invalid password values should be stored once later and reused consistently.

## Form Data

For form validation, keep reusable valid and invalid combinations in data files later. Include empty values, valid values, and boundary-like values where the page behavior can be confirmed.

## Environment Data

Base URLs and environment-specific settings should be configured separately from scenario data. Future tests should avoid hardcoded full URLs in every spec where a Playwright `baseURL` can be used.

