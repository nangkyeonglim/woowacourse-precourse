class BridgeGame {
  #bridge; // ['U', 'D', 'D']
  #currentPosition = 0;
  #result;

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
    if (this.isCorrectMoving(moving))
      return this.#result.get(direction).push('O');
    this.#result.get(direction).push('X');
  }

  getResult() {
    return this.#result;
  }

  isGameEnd() {
    return this.#currentPosition === this.#bridge.length - 1;
  }

  move() {
    this.#currentPosition += 1;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
