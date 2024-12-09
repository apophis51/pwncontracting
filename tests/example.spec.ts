import { test, expect } from '@playwright/test';

test('should check all links and follow them', async ({ page }) => {
    // Start from the index page
    await page.goto('http://localhost:3000/');

    // Find all anchor elements (links) in the page
    const links = await page.locator('a');

    // Get the count of links found
    const count = await links.count();
    console.log(`Found ${count} links on the page`);

    const errors: string[] = [];

    for (let i = 0; i < count-1; i++) {
        try {
            // Get the href attribute of the current link
            const href = await links.nth(i).getAttribute('href');

            if (!href) {
                continue;
            }
            console.log(`Found link: ${href}`);

            // Click on the link
            await links.nth(i).click();

            // Wait for navigation to complete
            await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

            // Verify the URL after navigation
            const currentURL = page.url();
           
            console.log(`Navigated to: ${currentURL}`);
            expect(currentURL).toContain(href);

            // Verify page title
            const pageTitle = await page.title();
            expect(pageTitle).not.toBe('PWNContracting');
            console.log(`Page title: ${pageTitle}`);

            // Check meta description
            const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
            expect(metaDescription).not.toBe('Get Contractor Advice');
            console.log(`Meta description: ${metaDescription}`);
        } catch (error) {
            const errorDetails = `Error testing link #${i}: ${error.message}`;
            console.error(errorDetails);
            errors.push(errorDetails);
        } finally {
            // Always navigate back to the starting page
            await page.goto('http://localhost:3000');
        }
    }

    if (errors.length > 0) {
        throw new Error(`Found errors:}`);
    }
});




// if (error.message.includes('PWNContracting')) {
//     console.error(
//     Error occurred while testing an h1 element:
//       H1 Text: "${await h1.textContent()}"
//       Current URL: ${page.url()}
//       The Title should not be PWNContracting
//     );
//     if (error.message.includes('Get Contractor Advice')) {
//         console.error(
//         Error occurred while testing an h1 element:
//           H1 Text: "${await h1.textContent()}"
//           Current URL: ${page.url()}
//           The Meta Description should not be "Get Contractor Advice"
//         );
// }
// errors.push(error.message);
// }

// } finally {