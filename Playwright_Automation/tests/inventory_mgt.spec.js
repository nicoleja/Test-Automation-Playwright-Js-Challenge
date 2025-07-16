import { test, expect } from '@playwright/test';

test('add_inventory_item', async ({ page }) => {
  await page.goto('https://www.saucedemo.com')
   await expect(page).toHaveTitle(/Swag Labs/);
  
    await page.locator('[placeholder="Username"]').fill('standard_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce')
    
    await page.waitForSelector('text = login', {timeout : 5000})
    await page.locator('text = login').click()

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    
    await page.locator('[data-test="shopping-cart-link"]').click();
    
    await page.locator('[data-test="continue-shopping"]').click();

    await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

    // await page.locator('[data-test="shopping-cart-link"]').click();
    // await page.locator('[data-test="checkout"]').click();

    // await page.locator('[data-test="firstName"]').click();
    // await page.locator('[data-test="firstName"]').fill('Nicole');
    // await page.locator('[data-test="lastName"]').click();
    // await page.locator('[data-test="lastName"]').fill('Jane');
    // await page.locator('[data-test="postalCode"]').click();
    // await page.locator('[data-test="postalCode"]').fill('2025');
    // await page.locator('[data-test="continue"]').click();
    // await page.locator('[data-test="finish"]').click();
    // await page.locator('[data-test="back-to-products"]').click();
  
    // await page.getByRole('button', { name: 'Open Menu' }).click();
    // await page.locator('[data-test="logout-sidebar-link"]').click();

})


