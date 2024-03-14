export default class OpenAccount {
  get openAccountBtn() {
    return $("[ng-click^=openAccount]");
  }

  get userSelect() {
    return $("#userSelect");
  }

  get options() {
    return $("option=Harry Potter");
  }

  get currencyBtn() {
    return $("[ng-model^=currency]");
  }

  get currencyOptions() {
    return $("option=Dollar");
  }

  get processBtn() {
    return $("button=Process");
  }
}
