import { test } from "../../fixtures/baseFixture";
import formData from "../../test-data/form-validation-data.json";

test("Page loads", async ({ formValidationPage }) => {
    await formValidationPage.navigate();
    await formValidationPage.expectAtFormValidationPage();
    await formValidationPage.expectFormValidationInputsVisible();
});

test("Valid card payment form redirects to confirmation", async ({ formValidationPage, formConfirmation }) => {
    await formValidationPage.navigate();
    await formValidationPage.fillForm(formData.validCardPayment);
    await formValidationPage.submitForm();
    await formConfirmation.isAtConfirmationPage();
    await formConfirmation.expectConfirmationMessageVisible();
});

test("Missing contact name displays validation message", async ({ formValidationPage }) => {
    await formValidationPage.navigate();
    await formValidationPage.fillForm(formData.missingContactName);
    await formValidationPage.submitForm();
    await formValidationPage.expectInvalidFeedbackVisible("Please enter your Contact name.");
    await formValidationPage.expectAtFormValidationPage();
});

test("Missing contact number displays validation message", async ({ formValidationPage }) => {
    await formValidationPage.navigate();
    await formValidationPage.fillForm(formData.missingContactNumber);
    await formValidationPage.submitForm();
    await formValidationPage.expectInvalidFeedbackVisible("Please provide your Contact number.");
    await formValidationPage.expectAtFormValidationPage();
});

test("Invalid phone format displays validation message", async ({ formValidationPage }) => {
    await formValidationPage.navigate();
    await formValidationPage.fillForm(formData.invalidPhoneFormat);
    await formValidationPage.submitForm();
    await formValidationPage.expectInvalidFeedbackVisible("Please provide your Contact number.");
    await formValidationPage.expectAtFormValidationPage();
});

test("Missing pickup date displays validation message", async ({ formValidationPage }) => {
    await formValidationPage.navigate();
    await formValidationPage.fillForm(formData.missingPickupDate);
    await formValidationPage.submitForm();
    await formValidationPage.expectInvalidFeedbackVisible("Please provide valid Date.");
    await formValidationPage.expectAtFormValidationPage();
});

test("Missing payment method displays validation message", async ({ formValidationPage }) => {
    await formValidationPage.navigate();
    await formValidationPage.fillForm(formData.missingPaymentMethod);
    await formValidationPage.submitForm();
    await formValidationPage.expectInvalidFeedbackVisible("Please select the Paymeny Method.");
    await formValidationPage.expectAtFormValidationPage();
});
