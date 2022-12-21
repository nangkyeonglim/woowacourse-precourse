class Validator {
  static checkPurchaseMoney(purchaseMoney) {
    if (!this.#isNumber(purchaseMoney))
      throw new Error('[ERROR] 숫자만 입력해 주세요.');
    if (!this.#isUnitOfPurchaseMoney(purchaseMoney))
      throw new Error('[ERROR] 1000원 단위로만 입력가능합니다.');
  }

  static checkWinningNumber(winningNumber) {
    if (!this.#isValidInputType(winningNumber)) {
      throw new Error('[ERROR] 숫자를 쉼표로 구분하여 입력해주세요.');
    }
  }

  static checkBonusNumber(winningNumber, bonusNumber) {
    if (!this.#isNumber(bonusNumber))
      throw new Error('[ERROR] 숫자만 입력해 주세요.');
    if (!this.#isRangeOfLottoNumber(bonusNumber))
      throw new Error('[ERROR] 1 ~ 45까지의 숫자만 입력가능합니다.');
    if (!this.#isDuplicatedWithWinningNumber(winningNumber, bonusNumber))
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  }

  static checkLotto(numbers) {
    if (!this.#isLottoNumberCount(numbers))
      throw new Error('[ERROR] 로또 번호는 6개 입니다.');
    if (!this.#isRangeOfLottoNumber(numbers))
      throw new Error('[ERROR] 1 ~ 45까지의 숫자만 입력가능합니다.');
    if (this.#hasDuplicateNumber(numbers))
      throw new Error('[ERROR] 로또 번호는 중복 될 수 없습니다.');
  }

  static #isNumber(num) {
    const check = /^[0-9]+$/;
    return check.test(num);
  }

  static #isUnitOfPurchaseMoney(money) {
    return !(Boolean(money % 1000) || money === 0);
  }

  static #isValidInputType(winningNumber) {
    const check = /^[0-9]+(,[0-9]+)+$/;
    return check.test(winningNumber);
  }

  static #isRangeOfLottoNumber(num) {
    return num >= 1 && num <= 45;
  }

  static #isDuplicatedWithWinningNumber(winningNumber, bonusNumber) {
    return winningNumber.includes(bonusNumber);
  }

  static #isLottoNumberCount(numbers) {
    return numbers.length === 6;
  }

  static #hasDuplicateNumber(numbers) {
    return new Set(numbers).size !== numbers.length;
  }
}

module.exports = Validator;
