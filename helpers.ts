import ENV from "../utils/env";

export async function login(page) {
  await page.goto(ENV.BASE_UI_URL);
  await page.locator('input[type="email"]').fill(ENV.EMAIL_ID);
  await page.locator('div[class*="LoginEmailForm-continueButton"]').click();
  await page.locator('input[type="password"]').fill(ENV.PASSWORD);
  await page.locator('div[class*="LoginPasswordForm-loginButton"]').click();
}
