class Account {
  // private 멤버 변수
  #balance;

  constructor() {
    this.#balance = 0;
  }

  // public 메서드를 통한 접근
  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account();

myAccount.deposit(100);

console.log(myAccount.getBalance());

// TODO: 파일을 실행하기 위해서는 아래의 코드를 주석 처리 하세요!
console.log(myAccount.#balance);
