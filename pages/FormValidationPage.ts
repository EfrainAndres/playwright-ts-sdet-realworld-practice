import { Locator, Page, expect } from "@playwright/test";

export type FormValidationData = {
    contactName: string;
    contactNumber: string;
    pickupDate: string;
    paymentMethod: string;
};

export class FormValidationPage {
    readonly page: Page;
    readonly contactNameInput: Locator;
    readonly contactNumberInput: Locator;
    readonly dateInput: Locator;
    readonly paymentMethodSelect: Locator;
    readonly registerButton: Locator;
    readonly invalidFeedback: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactNameInput = this.page.getByLabel('Contact Name');
        this.contactNumberInput = this.page.locator('input[name="contactnumber"]');
        this.dateInput = this.page.locator('input[name="pickupdate"]');
        this.paymentMethodSelect = this.page.getByLabel('Payment Method');
        this.registerButton = this.page.getByRole('button', { name: 'Register' });
        this.invalidFeedback = this.page.locator('.invalid-feedback');
    }

    async navigate() {
        await this.page.goto("/form-validation");
    }

    async fillContactName(name: string) {
        await this.contactNameInput.fill(name);
    }

    async fillContactNumber(number: string) {
        await this.contactNumberInput.fill(number);
    }

    async fillDate(date: string) {
        await this.dateInput.fill(date);
    }

    async selectPaymentMethod(method: string) {
        await this.paymentMethodSelect.selectOption({ value: method });
    }

    async fillForm(formData: FormValidationData) {
        await this.fillContactName(formData.contactName);
        await this.fillContactNumber(formData.contactNumber);
        await this.fillDate(formData.pickupDate);
        if (formData.paymentMethod) {
            await this.selectPaymentMethod(formData.paymentMethod);
        }
    }

    async submitForm() {
        await this.registerButton.click();
    }

    async expectFormValidationInputsVisible() {
        await expect(this.contactNameInput).toBeVisible();
        await expect(this.contactNumberInput).toBeVisible();
        await expect(this.dateInput).toBeVisible();
        await expect(this.paymentMethodSelect).toBeVisible();
        await expect(this.registerButton).toBeVisible();
    }

    async expectInvalidFeedbackVisible(message: string) {
        const feedback = this.invalidFeedback.filter({ hasText: message });
        await expect(feedback).toBeVisible();
        await expect(feedback).toHaveText(message);
    }

    async expectAtFormValidationPage() {
        await expect(this.page).toHaveURL(/\/form-validation(?:#.*)?$/);
    }
}
