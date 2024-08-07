import test from "playwright/test";

test("Search for Playwright on google", async ({ page }) => {
    /*
    Steps:
        Neavigate to "https://www.google.com/"
        Locate the search box
        type "Playwright"
        press Enter
    */

        await page.goto("https://www.google.com/"); 
        const searchBox = await page.locator("//textarea[@class='gLFyf']");
        // await searchBox.type('Playwright Automation');
        await searchBox.fill('Playwright Automation');  

        await searchBox.press('Enter');

  

});

