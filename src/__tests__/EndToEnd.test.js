import puppeteer from 'puppeteer';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('show/hide an event details', () => {

    test('An event element is collapsed by default', async () => {
      const browser = await puppeteer.launch(); // Launches the browser
      const page = await browser.newPage(); // Opens a new tab
      await page.goto('https://example.com'); // Navigates to https://example.com
      await page.screenshot({ path: 'example.png' }); // Takes a screenshot and saves it as “example.png”
    
      await browser.close(); // Closes the browser
      });
});