import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('contact form fill', async ({ page }) => {
  await page.goto('https://sanjithkumar.tech/');
  await page.getByRole('button', { name: 'Contact me' }).click();
  await expect(page).toHaveURL(/.*contact/);
  await page.locator(".fname").fill("Test")
  await page.locator(".email").fill("test@gmail.com")
  await page.locator(".subject").fill("playwwright Test")
  await page.locator("#message").fill("playwwright Test practice")
  await page.screenshot({ path: 'beforesubmit.png', fullPage: true })
  await page.locator(".submit").click()
});

test('project screenshot', async ({ page }) => {
  await page.goto('https://sanjithkumar.tech/');
  await page.getByRole('button', { name: 'View more' }).click();
  await expect(page).toHaveURL(/.*project/);
  await page.getByAltText('Teach Quiz using React JS').click()
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'project_1.png', fullPage: true })

});