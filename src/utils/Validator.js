const { ERROR, BRIDGE, COMMAND } = require('../constants/constants');

class Validator {
  static checkBridgeSize(size) {
    if (!this.#isNumber(size)) throw new Error(ERROR.isNotNumber);
    if (!this.#isRangeOfBridgeSize(size))
      throw new Error(ERROR.invalidRangeOfBridgeSize);
  }

  static checkMoving(moving) {
    if (!this.#isValidMoving(moving)) throw new Error(ERROR.invalidMoving);
  }

  static checkGameCommand(gameCommand) {
    if (!this.#isValidGameCommand(gameCommand))
      throw new Error(ERROR.invalidGameCommand);
  }

  static #isNumber(num) {
    const check = /^[0-9]+$/;
    return check.test(num);
  }

  static #isRangeOfBridgeSize(size) {
    return size >= BRIDGE.min && size <= BRIDGE.max;
  }

  static #isValidMoving(moving) {
    return moving === COMMAND.up || moving === COMMAND.down;
  }

  static #isValidGameCommand(gameCommand) {
    return gameCommand === COMMAND.retry || gameCommand === COMMAND.quit;
  }
}

module.exports = Validator;
