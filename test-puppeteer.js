const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  await page.goto('http://localhost:8080/');
  await new Promise(r => setTimeout(r, 2000));
  
  // click enter
  await page.evaluate(() => {
    document.querySelector('.seal').click();
  });
  await new Promise(r => setTimeout(r, 3000));
  
  // click add button
  await page.evaluate(() => {
    document.querySelector('#add-btn').click();
  });
  await new Promise(r => setTimeout(r, 1000));
  
  await page.type('#addr-input', 'Berlin');
  await new Promise(r => setTimeout(r, 1500));
  await page.evaluate(() => {
    document.querySelector('.sg-item').click();
  });
  await new Promise(r => setTimeout(r, 1000));

  await page.type('#f-name', 'Test Place');
  await page.select('#f-category', 'Freunde');
  await page.type('#f-date', 'Heute');
  await page.type('#f-story', 'Eine kleine Geschichte');
  await page.type('#f-from', 'Test');
  
  await page.evaluate(() => {
    document.querySelector('#f-submit').click();
  });
  
  await new Promise(r => setTimeout(r, 5000));
  await browser.close();
})();
