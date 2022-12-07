class BaseballGame {
  #computerNumber;

  constructor(computerNumber) {
    this.#computerNumber = computerNumber;
  }
  
  compareNumber(userNumber) {
    const result = {
      strike: 0,
      ball: 0,
    };

    userNumber.forEach((num, index) => {
      if (num === this.#computerNumber[index]) result.strike += 1;
      else if (this.#computerNumber.includes(num)) result.ball += 1;
    });
    return result;
  }
}

module.exports = BaseballGame;
