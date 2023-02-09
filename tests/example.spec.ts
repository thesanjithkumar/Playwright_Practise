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

test('test login', async ({ page }) => {
  await page.goto('localhost:3000/login');

  // Click the get started link.
  // await page.getByRole('link', { name: 'Sign in' }).click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*login*./);
  await page.getByLabel("Username").fill("testUser")
  await page.getByLabel("Password").fill("1234")
  // await expect(page.getByLabel("Username")).toContainText('testUser')
  // await expect(page.getByLabel("Password")).toContainText('1234')
  await page.getByRole("button", { name: "login" }).click()
  await expect(page.getByText('Instantly deploy your Next.js site to a shareable URL with Vercel.')).toBeVisible();
});
