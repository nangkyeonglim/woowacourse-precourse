const { makeBridge } = require('../BridgeMaker');
const { COMMAND } = require('../constants/constants');
const Bridge = require('../models/Bridge');
const BridgeGame = require('../models/BridgeGame');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const Validator = require('../utils/Validator');

class BridgeGameController {
  #bridgeGame;
  #view;

  constructor(view) {
    this.#view = view;
  }

  start() {
    this.#view.printInitialMessage();
    this.#readBridgeSizePhase();
  }

  #readBridgeSizePhase() {
    this.#view.readBridgeSize(this.#createBridgeGame.bind(this));
  }

  #createBridgeGame(size) {
    Validator.checkBridgeSize(size);
    this.#bridgeGame = new BridgeGame(
      new Bridge(makeBridge(Number(size), BridgeRandomNumberGenerator.generate))
    );
    this.#view.printNewLine();
    this.#readMovingPhase();
  }

  #readMovingPhase() {
    this.#view.readMoving(this.#checkAnswerPhase.bind(this));
  }

  #checkAnswerPhase(moving) {
    Validator.checkMoving(moving);
    this.#bridgeGame.updateResult(moving);
    this.#view.printMap(this.#bridgeGame.getResult());
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
    this.#view.readGameCommand(this.#handleRetryOrEndPhase.bind(this));
  }

  #handleRetryOrEndPhase(gameCommand) {
    Validator.checkGameCommand(gameCommand);
    if (gameCommand === COMMAND.retry) {
      this.#bridgeGame.retry();
      return this.#readMovingPhase();
    }
    this.#handleGameEndPhase(false);
  }

  #handleGameEndPhase(success) {
    this.#view.printResult({
      resultMap: this.#bridgeGame.getResult(),
      success,
      attempts: this.#bridgeGame.getAttempts(),
    });
    return this.#view.close();
  }
}

module.exports = BridgeGameController;
