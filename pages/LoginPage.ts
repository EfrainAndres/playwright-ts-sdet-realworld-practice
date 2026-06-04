import {Locator, Page, expect}  from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorAlert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.getByLabel('Username');
        this.passwordInput = this.page.getByLabel("Password");
        this.loginButton = this.page.getByRole('button', { name: /login/i });
        this.errorAlert = this.page.locator("#flash");
    }

    async navigate() {
        await this.page.goto("/login");
    }

    async login(username: string, password: string) {

        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async expectInvalidLoginError(message: string) {
        await expect(this.errorAlert).toBeVisible();
        await expect(this.errorAlert).toHaveText(message);
    }

    async isAtLoginPage() {
        await expect(this.page).toHaveURL(/\/login(?:#.*)?$/);
    }
}
