import { browser, by, element } from 'protractor';

// TODO: сгенерировать анимированную гифку из пройденного теста для документации

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}

