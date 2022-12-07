class BaseballGame {
  #computerNumber;
  #gameEnd;

  constructor(computerNumber) {
    this.#computerNumber = computerNumber;
    this.#gameEnd = false;
  }
  
  compareNumber(userNumber) {
    const result = {
      strike: 0,
      ball: 0,
    };
    [...userNumber].map(char => Number(char)).forEach((num, index) => {
      if (num === this.#computerNumber[index]) result.strike += 1;
      else if (this.#computerNumber.includes(num)) result.ball += 1;
    });
    this.changeGameEndStatus(result.strike);
    return result;
  }

  changeGameEndStatus(strike) {
    if (strike === 3) this.#gameEnd = true;
  }

  isGameEnd() {
    return this.#gameEnd;
  }
}

module.exports = BaseballGame;
