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
    const duplicatedCount = this.countDuplicatedNumber(winningNumber);
    if (duplicatedCount === 6) return 'first';
    if (this.hasBonusNumber(bonusNumber) && duplicatedCount === 5)
      return 'second';
    if (duplicatedCount === 5) return 'third';
    if (duplicatedCount === 4) return 'fourth';
    if (duplicatedCount === 3) return 'fifth';
  }
}

module.exports = Lotto;
