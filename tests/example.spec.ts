import { test, expect } from '@playwright/test'

// test('should navigate to the blog page', async ({ page }) => {
//     // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
//     await page.goto('http://localhost:3000/')
//     // Find an element with the text 'About' and click on it
//     await page.click('text=Essential Tools and Techniques for Vetting Subcontractors')
//     await expect(page).toHaveURL('http://localhost:3000/blogs/essential-tools-and-techniques-for-vetting-subcontractors')
//     // The new page should contain an h1 with "About"
//     await expect(page.locator('h1')).toContainText('Essential Tools and Techniques for Vetting Subcontractors')
// })


test('should check h1 elements and follow links', async ({ page }) => {
    // Start from the index page
    await page.goto('http://localhost:3000/');

    // Find all h1 elements on the page
    const h1Elements = await page.locator('h1').all();
    console.log(h1Elements)

    const errors: string[] = [];


    for (const h1 of h1Elements) {
        // Get the text content of the h1
        try {
            const h1Text = await h1.textContent();
            console.log(`Clicking h1: ${h1Text}`);

            // Click the h1
            await h1.click();

            // Wait for navigation to complete
            await page.waitForLoadState('load');

            // Check if the follow-on page has a title
            const pageTitle = await page.title();
            expect(pageTitle).not.toBeNull();
            expect(pageTitle).not.toBe('PWNContracting');
            console.log(`Page title: ${pageTitle}`);

            // const metaTitle = await page.locator('meta[name="title"]').getAttribute('content');

            // Ensure the meta title is defined and does not have the unwanted value
            // expect(metaTitle).toBeTruthy(); // Ensures it's neither null nor an empty string
            // expect(metaTitle).not.toBe('PWNContracting');
            // console.log(`Verified Meta title: "${metaTitle}"`);

            // Check for a description meta tag
            const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
            expect(metaDescription).not.toBeNull();
            expect(metaDescription).not.toBe('Get Contractor Advice');
            console.log(`Meta description: ${metaDescription}`);

            // Navigate back to the original page to continue testing
         
        }
     catch (error) {
        // Log the error and continue with the next h1 element
        // console.error(`Error while testing: ${error.message}`);
        if (error.message.includes('PWNContracting')) {
            console.error(`
            Error occurred while testing an h1 element:
              H1 Text: "${await h1.textContent()}"
              Current URL: ${page.url()}
              The Title should not be PWNContracting
            `);
            if (error.message.includes('Get Contractor Advice')) {
                console.error(`
                Error occurred while testing an h1 element:
                  H1 Text: "${await h1.textContent()}"
                  Current URL: ${page.url()}
                  The Meta Description should not be "Get Contractor Advice"
                `);
        }
        errors.push(error.message);
    }
        
    } finally {
        // Navigate back to the original page to continue testing
        await page.goto('http://localhost:3000/');
    }
    

    }
    if (errors.length > 0) {
        throw new Error(`Multiple errors found during testing`);
    }
});