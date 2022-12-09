const { GRADE } = require('../constants/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  countDuplicatedNumber(winningNumber) {
    return this.#numbers.filter((number) => winningNumber.includes(number))
      .length;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  calculateGrade(winningNumber, bonusNumber) {
    const count = this.countDuplicatedNumber(winningNumber);
    if (count === GRADE.first.duplicateCount) return GRADE.first.name;
    if (
      this.hasBonusNumber(bonusNumber) &&
      count === GRADE.second.duplicateCount
    )
      return GRADE.second.name;
    if (count === GRADE.third.duplicateCount) return GRADE.third.name;
    if (count === GRADE.fourth.duplicateCount) return GRADE.fourth.name;
    if (count === GRADE.fifth.duplicateCount) return GRADE.fifth.name;
  }
}

module.exports = Lotto;
