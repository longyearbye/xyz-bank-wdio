export default class WithdrawMoney {
  get withdrawBtn() {
    return $("[ng-class^=btnClass2]");
  }

  get withdrawField() {
    return $("[ng-model^=amount]");
  }

  get submitBtn() {
    return $(".btn-default");
  }

  get withdrawMessage() {
    return $(".ng-binding");
  }
}
