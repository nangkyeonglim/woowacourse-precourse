const Validator = require('../utils/Validator');

class Bridge {
  #directions;

  #currentPosition = 0;

  constructor(directions) {
    this.#directions = directions;
  }

  isCurrentPosition(moving) {
    return this.#directions[this.#currentPosition] === moving;
  }

  isBridgeEnd() {
    return this.#currentPosition === this.#directions.length - 1;
  }

  movePosition() {
    this.#currentPosition += 1;
  }

  initializeCurrentPosition() {
    this.#currentPosition = 0;
  }
}

module.exports = Bridge;
