import { browser } from "@wdio/globals";

export default class Page {
  open(path) {
    return browser.url(
      `https://www.globalsqa.com/angularJs-protractor/BankingProject/#${path}`
    );
  }
}
