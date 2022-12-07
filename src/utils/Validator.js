class Validator {
  static checkUserNumber(userNumber) {
    if (!this.#isNumber()) throw new Error('[ERROR] 숫자만 입력해주세요');
    if (!this.#isRangeOfLength()) throw new Error('[ERROR] 3자리 숫자만 입력가능합니다');
    if (this.#hasZero()) throw new Error('[ERROR] 1 ~ 9사이의 숫자만 입력 가능합니다');
    if (this.#isDuplicated()) throw new Error('[ERROR] 중복되지 않는 숫자를 입력해주세요');
  }

  static checkGameCommand(gameCommand) {
    if (!this.#isValidCommand) throw new Error('[ERROR] 재시작: 1, 종료: 2 만 입력가능합니다')
  }

  static #isNumber(number) {

  }

  static #hasZero(number) {

  }

  static #isDuplicated(number) {

  }

  static #isRangeOfLength(number) {

  }

  static #isValidCommand(gameCommand) {

  }
}

module.exports = Validator;