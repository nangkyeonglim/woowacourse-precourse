const { makeBridge } = require('../BridgeMaker');
const { COMMAND } = require('../constants/constants');
const BridgeGame = require('../models/BridgeGame');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeGameController {
  #bridgeGame;

  start() {
    OutputView.printInitialMessage();
    this.#readBridgeSizePhase();
  }

  #readBridgeSizePhase() {
    InputView.readBridgeSize(this.#createBridgeGame.bind(this));
  }

  #createBridgeGame(size) {
    this.#bridgeGame = new BridgeGame(
      makeBridge(Number(size), BridgeRandomNumberGenerator.generate)
    );
    this.#readMovingPhase();
  }

  #readMovingPhase() {
    InputView.readMoving(this.#checkAnswerPhase.bind(this));
  }

  #checkAnswerPhase(moving) {
    this.#bridgeGame.updateResult(moving);
    OutputView.printMap(this.#bridgeGame.getResult());
    if (this.#bridgeGame.isCorrectMoving(moving)) {
      return this.#correctAnswerPhase();
    }
    this.#readGameCommandPhase();
  }

  #correctAnswerPhase() {
    if (this.#bridgeGame.isGameEnd()) {
      return this.#handleGameEndPhase(true);
    }
    this.#bridgeGame.move();
    this.#readMovingPhase();
  }

  #readGameCommandPhase() {
    InputView.readGameCommand(this.#handleRetryOrEndPhase.bind(this));
  }

  #handleRetryOrEndPhase(gameCommand) {
    if (gameCommand === COMMAND.retry) {
      this.#bridgeGame.retry();
      return this.#readMovingPhase();
    }
    this.#handleGameEndPhase(false);
  }

  #handleGameEndPhase(success) {
    OutputView.printResult(
      this.#bridgeGame.getResult(),
      success,
      this.#bridgeGame.getAttempts()
    );
    return OutputView.close();
  }
}

module.exports = BridgeGameController;
