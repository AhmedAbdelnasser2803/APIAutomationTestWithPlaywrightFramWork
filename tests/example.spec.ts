import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json';

test.beforeEach(async ({ page }) => {
  page.route('https://conduit-api.bondaracademy.com/api/tags', async route => {
    await route.fulfill({
      body: JSON.stringify(tags),});
  });
  await page.goto('/');
});

test('has title', async ({ page }) => {
  // check that  the navigation is working and the title is correct
  
  await page.waitForTimeout(3000)
  await expect(page.locator('.logo-font').first()).toHaveText('conduit');


});


// page is still ope ned after running testcases 
test.afterEach(async ({ page }) => {
  await page.pause();
} );
