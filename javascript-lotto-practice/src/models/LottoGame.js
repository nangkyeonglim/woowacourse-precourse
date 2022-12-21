const { LOTTO, GRADE } = require('../constants/constants');
const LottoNumberGeneartor = require('../utils/LottoNumberGenerator');
const Lotto = require('./Lotto');

class LottoGame {
  #purchaseMoney;
  #lottos = [];
  #grade = new Map([
    [GRADE.fifth.name, 0],
    [GRADE.fourth.name, 0],
    [GRADE.third.name, 0],
    [GRADE.second.name, 0],
    [GRADE.first.name, 0],
  ]);

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
  }

  issueLottos() {
    while (this.#lottos.length !== this.#purchaseMoney / LOTTO.price)
      this.#lottos.push(new Lotto(LottoNumberGeneartor.generate()));
  }

  getLottos() {
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }

  getLottosCount() {
    return this.#lottos.length;
  }

  getGrade() {
    return this.#grade;
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
    let totalPrize = 0;
    this.#grade.forEach((gradeCount, grade) => {
      totalPrize += gradeCount * GRADE[grade].prize;
    });
    return (totalPrize / this.#purchaseMoney) * 100;
  }
}

module.exports = LottoGame;
