class Validator {
  static checkUserNumber(userNumber) {
    if (!this.#isNumber(userNumber)) throw new Error('[ERROR] 숫자만 입력해주세요');
    if (!this.#isRangeOfLength(userNumber)) throw new Error('[ERROR] 3자리 숫자만 입력가능합니다');
    if (this.#hasZero(userNumber)) throw new Error('[ERROR] 1 ~ 9사이의 숫자만 입력 가능합니다');
    if (this.#isDuplicated(userNumber)) throw new Error('[ERROR] 중복되지 않는 숫자를 입력해주세요');
  }

  static checkGameCommand(gameCommand) {
    if (!this.#isValidCommand(gameCommand)) throw new Error('[ERROR] 재시작: 1, 종료: 2 만 입력가능합니다')
  }

  static #isNumber(number) {
    const check = /^[0-9]+$/; 
    return check.test(number);
  }

  static #hasZero(number) {
    return number.includes(0);
  }

  static #isDuplicated(number) {
    return new Set(number).size !== number.length;
  }

  static #isRangeOfLength(number) {
    return number.length === 3;
  }

  static #isValidCommand(gameCommand) {
    return gameCommand === '1' || gameCommand === '2';
  }
}

module.exports = Validator;