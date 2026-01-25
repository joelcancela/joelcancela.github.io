import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToIndexPage(): Promise<void> {
    return browser.get(browser.baseUrl) as Promise<void>;
  }

  getNavbarBrand(): Promise<string> {
    return element(by.css('ngjc-root .navbar-brand')).getText() as Promise<string>;
  }
}
