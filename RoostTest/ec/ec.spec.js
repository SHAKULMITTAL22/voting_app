const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const ROOST_SVC_URL = 'https://www.roostsvc.com/';

const options = new chrome.Options();
options.addArguments('--disable-extensions');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

driver.get(ROOST_SVC_URL);

driver.getTitle().then(title => {
  console.log(`Page title: ${title}`);
});

driver.quit();