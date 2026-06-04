import { Locator, Page, expect } from "@playwright/test";

export class FormConfirmationPage {
    readonly page: Page;
    readonly confirmationMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.confirmationMessage = this.page
            .getByRole('alert')
            .getByText('Thank you for validating your ticket', { exact: true });
    }

    async expectConfirmationMessageVisible() {
        await expect(this.confirmationMessage).toBeVisible();
    }

    async isAtConfirmationPage() {
        await expect(this.page).toHaveURL(/\/form-confirmation(?:#.*)?$/);
    }
}
