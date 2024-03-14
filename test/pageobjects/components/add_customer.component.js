export default class AddCustomer {
  get addBtn() {
    return $("[ng-click^=addCust]");
  }

  async addCustomer(firstName, lastName, postCode) {
    await $("[ng-model^=fName]").setValue(firstName);
    await $("[ng-model^=lName]").setValue(lastName);
    await $("[ng-model^=postCd]").setValue(postCode);
  }

  get addCustomerBtn() {
    return $("button=Add Customer");
  }
}
