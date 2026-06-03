# Flaky Test Strategy

## Avoid Fixed Waits

Do not use `waitForTimeout` for normal synchronization. Fixed waits make tests slower and still fail when the application is slower than expected.

## Use Web-First Assertions

Use Playwright assertions that wait automatically, such as visibility, URL, checked state, table content, and text expectations.

## Wait For User-Visible Outcomes

Prefer waiting for outcomes a user can observe:

- A success message appears.
- An error message appears.
- The URL changes.
- A table row becomes visible.
- A selected option is reflected in the control.

## Keep Tests Independent

Each test should set up its own state or use isolated fixtures. Avoid relying on tests running in a specific order.

## Avoid Shared State

Do not mutate shared data unless the test has a cleanup strategy. Shared state is one of the most common causes of unreliable suites.

## Debugging Later

When automation is implemented, use Playwright trace, screenshots, and videos to diagnose failures. These artifacts should help identify whether the problem is test logic, selector instability, timing, or an application issue.

