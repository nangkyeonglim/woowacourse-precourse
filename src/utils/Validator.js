class Validator {
  static checkBridgeSize(size) {}
  static checkMoving(moving) {}
  static checkGameCommand(gameCommand) {}

  static #isNumber(number) {
    const check = /^[0-9]+$/;
    return check.test(num);
  }

  static #isRangeOfBridgeSize(size) {}
  static #isValidMoving(moving) {}
  static #isValidGameCommand(gameCommand) {}
}

module.exports = Validator;
