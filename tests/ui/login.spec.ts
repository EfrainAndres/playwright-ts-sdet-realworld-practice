import { test } from '../../fixtures/baseFixture';
import loginData from "../../test-data/login-data.json";

test("Successful login", async ({ loginPage, securePage }) => {
    await loginPage.navigate();
    await loginPage.login(loginData.valid_user.username, loginData.valid_user.password);
    await securePage.isAtSecureArea();
    await securePage.expectSuccessMessage("You logged into a secure area!");
    await securePage.expectLogoutButtonVisible();
});

test("Missing username validation", async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(loginData.missing_username.username, loginData.missing_username.password);
    await loginPage.isAtLoginPage();
    await loginPage.expectInvalidLoginError("Your username is invalid!");
});

test("Invalid password", async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(loginData.invalid_password.username, loginData.invalid_password.password);
    await loginPage.isAtLoginPage();
    await loginPage.expectInvalidLoginError("Your password is invalid!");
});
