import { test, expect } from '@playwright/test';

test('clicks on counter twice', async ({ page }) => {
   
    await page.goto('http://localhost:5173/');
    const counterButton = await page.locator("#counter")

    
    await counterButton.click();
    await counterButton.click();

    
    const counterValue = await page.locator("#counter").innerText();
    expect(counterValue).toBe("count is 2");
});