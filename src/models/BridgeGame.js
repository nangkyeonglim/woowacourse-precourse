class BridgeGame {
  #bridge; // ['U', 'D', 'D']
  #currentPosition = 0;
  #result;
  #attempts = 1;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#result = new Map([
      ['U', []],
      ['D', []],
    ]);
  }

  isCorrectMoving(moving) {
    return this.#bridge[this.#currentPosition] === moving;
  }

  updateResult(moving) {
    Array.from(this.#result.keys())
      .filter((direction) => direction !== moving)
      .forEach((direction) => this.#result.get(direction).push(' '));
    if (this.isCorrectMoving(moving)) return this.#result.get(moving).push('O');
    this.#result.get(moving).push('X');
  }

  getResult() {
    return this.#result;
  }

  getAttempts() {
    return this.#attempts;
  }

  isGameEnd() {
    return this.#currentPosition === this.#bridge.length - 1;
  }

  move() {
    this.#currentPosition += 1;
  }

  retry() {
    this.#attempts += 1;
    this.#currentPosition = 0;
  }
}

module.exports = BridgeGame;
