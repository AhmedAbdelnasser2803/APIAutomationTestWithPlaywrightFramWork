import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  // check that  the navigation is working and the title is correct
  
  await page.waitForTimeout(3000)
  await expect(page.locator('.logo-font').first()).toHaveText('conduit');
});

