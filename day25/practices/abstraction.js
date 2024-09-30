class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;

    let _balance = balance;

    // Setter 메서드
    this.deposit = function (amount) {
      if (amount > 0) {
        _balance += amount;

        console.log(`Deposited ${amount}. New balance: ${_balance}`);
      }
    };

    // Getter 메서드
    this.getBalance = function () {
      return _balance;
    };
  }
}

const account = new BankAccount("아무개", 2000);

account.deposit(500);

console.log(account.getBalance());
