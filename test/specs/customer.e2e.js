import Deposit from "../pageobjects/components/deposit.component.js";
import CustomerLogin from "../pageobjects/components/login.component.js";
import WithdrawMoney from "../pageobjects/components/withdraw.component.js";
import CustomerPage from "../pageobjects/pages/customer_page.js";
import { customerData } from "../data/customerData.js";

describe("xyz bank operations using customer account", () => {
  const customerPage = new CustomerPage();
  const customerLogin = new CustomerLogin();
  const deposit = new Deposit();
  const withdraw = new WithdrawMoney();
  beforeEach(async () => {
    await customerPage.open("");
  });

  it("opens up bank homepage", async () => {
    await expect(browser).toHaveUrl(customerData.browserUrl);
    await expect(browser).toHaveTitle("XYZ Bank");
  });

  it.only("log in to the bank page using valid credentials", async () => {
    await customerLogin.customerBtn.click();
    await customerLogin.options.click();
    await customerLogin.nameOption.click();
    await customerLogin.loginBtn.click();
    expect(customerLogin.customerDashboard).toBeDisplayed();
  });

  it("deposit money", async () => {
    await customerLogin.customerBtn.click();
    await customerLogin.options.click();
    await customerLogin.nameOption.click();
    await customerLogin.loginBtn.click();
    await deposit.depositBtn.click();
    await deposit.amountField.setValue("230");
    await deposit.submitBtn.click();
    await expect(deposit.depositMessage).toBeDisplayed();
  });

  it("withdraw money", async () => {
    await customerLogin.customerBtn.click();
    await customerLogin.options.click();
    await customerLogin.nameOption.click();
    await customerLogin.loginBtn.click();
    await withdraw.withdrawBtn.click();
    await withdraw.withdrawField.setValue("100");
    await withdraw.submitBtn.click();
    await expect(withdraw.withdrawMessage).toBeDisplayed();
  });
});
