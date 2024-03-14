export default class CustomerLogin {
  get customerBtn() {
    return $("[ng-click^=customer]");
  }

  get options() {
    return $("[ng-model^=custId]");
  }

  get nameOption() {
    return $("option=Hermoine Granger");
  }

  get loginBtn() {
    return $("button=Login");
  }

  get customerDashboard() {
    return $(".borderM box padT20 ng-scope");
  }
}
