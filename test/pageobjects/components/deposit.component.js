export default class Deposit {
  get depositBtn() {
    return $("[ng-class^=btnClass2]");
  }

  get amountField() {
    return $("[ng-model^=amount]");
  }

  get submitBtn() {
    return $(".btn-default");
  }

  get depositMessage() {
    return $("[ng-show^=message]");
  }
}
