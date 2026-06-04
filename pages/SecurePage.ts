import { expect, Locator, Page } from "@playwright/test";

export class SecurePage {
    readonly page: Page;
    readonly successMessage: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successMessage = this.page.locator("#flash");
        this.logoutButton = this.page.getByRole('link', { name: 'Logout' });
    }

    async isAtSecureArea() {
        await expect(this.page).toHaveURL(/\/secure(?:#.*)?$/);
    }

    async expectSuccessMessage(message: string) {
        await expect(this.successMessage).toBeVisible();
        await expect(this.successMessage).toHaveText(message);
    }

    async expectLogoutButtonVisible() {
        await expect(this.logoutButton).toBeVisible();
    }

    async logout() {
        await this.logoutButton.click();
    }
}
