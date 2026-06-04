import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SecurePage } from '../pages/SecurePage';
import { FormValidationPage } from '../pages/FormValidationPage';
import { FormConfirmationPage } from '../pages/FormConfirmationPage';

type Fixtures = {
    loginPage: LoginPage;
    securePage: SecurePage;
    formValidationPage: FormValidationPage;
    formConfirmation: FormConfirmationPage;
};

const blockedThirdPartyPattern = /.*(blossomup\.co|doubleclick\.net|googleadservices\.com|googlesyndication\.com|googletagmanager\.com).*/;

export const test = base.extend<Fixtures>({
    page: async ({ page }, use) => {
        await page.route(blockedThirdPartyPattern, route => route.abort());
        await use(page);
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    securePage: async ({ page }, use) => {
        await use(new SecurePage(page));
    },
    formValidationPage: async ({ page }, use) => {
        await use(new FormValidationPage(page));
    },
    formConfirmation: async ({ page }, use) => {
        await use(new FormConfirmationPage(page));   
    }
});

export { expect };
