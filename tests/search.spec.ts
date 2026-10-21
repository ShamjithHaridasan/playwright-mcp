import { test, expect } from '@playwright/test';

test('searches for Garfield and shows the movie', async ({ page }) => {
  await page.goto('https://debs-obrien.github.io/playwright-movies-app');

  await page.getByRole('search').click();
  const searchBox = page.getByRole('textbox', { name: 'Search for a movie' });
  await searchBox.fill('Garfield');
  await searchBox.press('Enter');

  await expect(page.getByRole('heading', { name: 'Garfield', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'The Garfield Movie' })).toBeVisible();
});