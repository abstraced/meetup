import puppeteer from 'puppeteer';

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(
      {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ]
    }
    );
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const extra = await page.$('.Event .extra_infos');
    expect(extra).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .toggleInfos');

    const extra = await page.$('.Event .extra_infos');
    expect(extra).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.Event .toggleInfos');

    const extra = await page.$('.Event .extra_infos');
    expect(extra).toBeNull();
  });

});
