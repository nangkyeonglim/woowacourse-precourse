const { NUMBER, ERROR, GAME_COMMAND } = require("../constants/constants");

class Validator {
  static checkUserNumber(userNumber) {
    if (!this.#isNumber(userNumber)) throw new Error(ERROR.isNotNumber);
    if (!this.#isRangeOfLength(userNumber)) throw new Error(ERROR.isNotRangeOfLength);
    if (this.#hasZero(userNumber)) throw new Error(ERROR.hasZero);
    if (this.#isDuplicated(userNumber)) throw new Error(ERROR.isDuplicated);
  }

  static checkGameCommand(gameCommand) {
    if (!this.#isValidCommand(gameCommand)) throw new Error(ERROR.invalidCommand)
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
    return number.length === NUMBER.length;
  }

  static #isValidCommand(gameCommand) {
    return gameCommand === GAME_COMMAND.retry || gameCommand === GAME_COMMAND.quit;
  }
}

module.exports = Validator;