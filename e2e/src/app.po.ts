import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  goToPageThree() {
    element(by.linkText('3'))
    .click();
  }
}
