import AddCustomer from "../pageobjects/components/add_customer.component.js";
import OpenAccount from "../pageobjects/components/open_acc.component.js";
import ManagerPage from "../pageobjects/pages/manager_page.js";
import { managerData } from "../data/managerData.js";

describe("xyz bank operations using manager account", async () => {
  const managerPage = new ManagerPage();
  const addCust = new AddCustomer();
  const openAcc = new OpenAccount();

  beforeEach(async () => {
    await managerPage.open("");
  });

  it("log in by bank manager account", async () => {
    await expect(browser).toHaveUrl(managerData.browserUrl);
  });

  it("add customer", async () => {
    await addCust.addBtn.click();
    await expect(browser).toHaveUrl(managerData.addCustomerUrl);

    await addCust.addCustomer(
      managerData.firstName,
      managerData.lastName,
      managerData.postCode
    );
    await addCust.addCustomerBtn.click();
    browser.pause(5000);
    const alert = browser.getAlertText();
    await expect(alert).toHaveText(managerData.customerAlertMessage);
    browser.acceptAlert();
  });

  it.only("open account", async () => {
    await openAcc.openAccountBtn.click();
    await openAcc.userSelect.click();
    await openAcc.options.click();
    await openAcc.currencyBtn.click();
    await openAcc.currencyOptions.click();
    await openAcc.processBtn.click();
    browser.pause(5000);
    const alert = browser.getAlertText();
    browser.acceptAlert();
    await expect(alert).toHaveText(managerData.accountAlertMessage);
  });
});
