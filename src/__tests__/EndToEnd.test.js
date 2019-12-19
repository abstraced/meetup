import puppeteer from 'puppeteer';


describe('show/hide an event details', () => {

    test('An event element is collapsed by default', async () => {
        const browser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
    
        await page.waitForSelector('.Event');
    
        const extra = await page.$('.Event .extra_infos');
        expect(extra).toBeNull();
        browser.close();
      });
});