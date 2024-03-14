import Page from "./page.js";

export default class CustomerPage extends Page {
  open() {
    return super.open("/login");
  }
}
