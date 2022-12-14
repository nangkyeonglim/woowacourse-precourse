const { COMMAND, RESULT_MAP } = require('../constants/constants');

class BridgeGame {
  #bridge;

  #attempts = 1;

  #result = new Map([
    [COMMAND.up, []],
    [COMMAND.down, []],
  ]);

  constructor(bridge) {
    this.#bridge = bridge;
  }

  isCorrectMoving(moving) {
    return this.#bridge.isCurrentPosition(moving);
  }

  updateResult(moving) {
    Array.from(this.#result.keys())
      .filter((direction) => direction !== moving)
      .forEach((direction) =>
        this.#result.get(direction).push(RESULT_MAP.empty)
      );
    if (this.isCorrectMoving(moving))
      return this.#result.get(moving).push(RESULT_MAP.correct);
    this.#result.get(moving).push(RESULT_MAP.wrong);
  }

  getResult() {
    return this.#result;
  }

  getAttempts() {
    return this.#attempts;
  }

  isGameEnd() {
    return this.#bridge.isBridgeEnd();
  }

  move() {
    this.#bridge.movePosition();
  }

  retry() {
    this.#bridge.initializeCurrentPosition();
    this.#attempts += 1;
    this.#result = new Map([
      [COMMAND.up, []],
      [COMMAND.down, []],
    ]);
  }
}

module.exports = BridgeGame;
