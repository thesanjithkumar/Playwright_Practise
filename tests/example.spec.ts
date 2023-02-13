import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

// test('contact form fill', async ({ page }) => {
//   await page.goto('https://sanjithkumar.tech/');
//   await page.getByRole('button', { name: 'Contact me' }).click();
//   await expect(page).toHaveURL(/.*contact/);
//   await page.locator(".fname").fill("Test")
//   await page.locator(".email").fill("test@gmail.com")
//   await page.locator(".subject").fill("playwwright Test")
//   await page.locator("#message").fill("playwwright Test practice")
//   await page.screenshot({ path: 'beforesubmit.png', fullPage: true })
//   await page.locator(".submit").click()
// });

// test('project screenshot', async ({ page }) => {
//   await page.goto('https://sanjithkumar.tech/');
//   await page.getByRole('button', { name: 'View more' }).click();
//   await expect(page).toHaveURL(/.*project/);
//   await page.getByAltText('Teach Quiz using React JS').click()
//   await page.waitForTimeout(3000);
//   await page.screenshot({ path: 'project_1.png', fullPage: true })

// });

test("book my show ticket booking", async ({ page }) => {
  const theaterName = process.env.npm_config_theaterName;
  // const theaterName = "Cinephile HSR Layout: PNR Felicity Mall Haralur Rd"
  const showTime = process.env.npm_config_showTime;
  // const showTime = "06:00 PM"
  const seatNumber = process.env.npm_config_seatNumber;
  // const seatNumber = '11';
  const row = process.env.npm_config_row?.toUpperCase();
  // const row = "I";
  const movieName = process.env.npm_config_movieName;
  // const movieName = "Pathaan";
  await page.goto('https://in.bookmyshow.com/', { waitUntil: 'commit' });
  await page.getByRole('img', { name: 'BANG', exact: true }).click();
  await page.getByRole('img', { name: movieName, exact: true }).click();
  await page.getByRole('button', { name: 'Book tickets', exact: true }).click();
  await page.getByRole('listitem').getByText('2D', { exact: true }).click()
  // await page.getByRole('listitem').filter({ hasText: new RegExp(`${theatername} INFO ?(01:30 PM)? ?(04:30 PM)? ?(07:30 PM)? ?(10:00 PM).*`) }).getByRole('link', { name: '07:30 PM' }).click();
  await page.getByRole('listitem').filter({ hasText: theaterName }).getByRole('link', { name: showTime }).click();
  if (await page.locator('#btnPopupAccept').isVisible) {
    // await page.locator('#btnPopupAccept').click()
    await page.getByText(/Select Seats/).click()
  }
  await page.getByRole('row', { name: new RegExp(`${row}( [0-9] [0-9]+)*( ([0-9][0-9]))*`) }).getByRole('link', { name: seatNumber, exact: true }).click();
  await page.getByRole('link', { name: new RegExp(`Pay Rs.[0-9]+.[0-9]+`) }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'page.png' });
});