import { test, expect } from '@playwright/test';

test('standard_user_login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);
  
    await page.locator('[placeholder="Username"]').fill('standard_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce')
    
    await page.waitForSelector('text = login', {timeout : 5000})
    await page.locator('text = login').click()

})

test('locked_out_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  await expect(page).toHaveTitle(/Swag Labs/);
  
    await page.locator('[placeholder="Username"]').fill('locked_out_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce')
    
    await page.waitForSelector('text = login', {timeout : 5000})
    await page.locator('text = login').click()

})

test('problem_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);
  
    await page.locator('[placeholder="Username"]').fill('locked_out_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce')
    await page.waitForSelector('text = login', {timeout : 5000})
    await page.locator('text = login').click()

})

test('performance_glitch_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);
  
    await page.locator('[placeholder="Username"]').fill('locked_out_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce')
    await page.waitForSelector('text = login', {timeout : 5000})
    await page.locator('text = login').click()

})

test('error_user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);
  
    await page.locator('[placeholder="Username"]').fill('locked_out_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce')
    await page.waitForSelector('text = login', {timeout : 5000})
    await page.locator('text = login').click()

})

test('visual_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);
  
    await page.locator('[placeholder="Username"]').fill('locked_out_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce')
    await page.waitForSelector('text = login', {timeout : 5000})
    await page.locator('text = login').click()

})



