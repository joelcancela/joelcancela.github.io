import { AppPage } from './app.page';
import { browser, logging } from 'protractor';

describe('joelcancela.github.io index', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be displayed correctly', async () => {
    await page.navigateToIndexPage();
    expect(await page.getNavbarBrand()).toEqual('Joël Cancela Vaz');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
