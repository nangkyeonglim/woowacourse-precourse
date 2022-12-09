const LottoNumberGeneartor = require('../utils/LottoNumberGenerator');
const Lotto = require('./Lotto');

class LottoGame {
  #purchaseMoney;
  #lottos = [];
  #grade = new Map([
    ['fifth', 0],
    ['fourth', 0],
    ['third', 0],
    ['second', 0],
    ['first', 0],
  ]);

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
  }

  issueLottos() {
    while (this.#lottos.length !== this.#purchaseMoney / 1000)
      this.#lottos.push(new Lotto(LottoNumberGeneartor.generate()));
  }

  getLottos() {
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }

  getLottosCount() {
    return this.#lottos.length;
  }

  calculateWinningResult(winningNumber, bonusNumber) {
    this.#lottos.forEach((lotto) =>
      this.countGrade(lotto.calculateGrade(winningNumber, bonusNumber))
    );
  }

  countGrade(grade) {
    if (grade === undefined) return;
    this.#grade.set(grade, this.#grade.get(grade) + 1);
  }

  calculateProfitRate() {
    let prize = 0;
    this.#grade.forEach((gradeCount, grade) => {
      prize += gradeCount * GRADE[grade].prize;
    });
    return (prize / this.#purchaseMoney) * 100;
  }
}

module.exports = LottoGame;
