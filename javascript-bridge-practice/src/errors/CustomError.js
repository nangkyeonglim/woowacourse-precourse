const { ERROR } = require('../constants/constants');

class CustomError extends Error {
  constructor(message) {
    super(ERROR.prefix(message));
    this.name = this.constructor.name;
  }
}

module.exports = CustomError;
