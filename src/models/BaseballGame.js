class BaseballGame {
  #computerNumber;
  #result;

  constructor(computerNumber) {
    this.#computerNumber = computerNumber;
    this.#result = {
      strike: 0,
      ball: 0,
    }
  }
  
  compareNumber(userNumber) {
    userNumber.forEach((num, index) => {
      if (num === this.#computerNumber[index]) this.#result.strike += 1;
      else if (this.#computerNumber.includes(num)) this.#result.ball += 1;
    });
  }
}

module.exports = BaseballGame;
