import Page from "./page.js";

export default class ManagerPage extends Page {
  open() {
    return super.open("/manager");
  }
}
