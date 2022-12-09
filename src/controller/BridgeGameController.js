const BridgeMaker = require('../BridgeMaker');
const BridgeGame = require('../models/BridgeGame');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeGameController {
  start() {
    OutputView.printInitialMessage();
    this.#readBridgeSizePhase();
  }

  #readBridgeSizePhase() {
    InputView.readBridgeSize(this.#createBridgeGame.bind(this));
  }

  #createBridgeGame(size) {
    new BridgeGame(BridgeMaker(size, BridgeRandomNumberGenerator.generate()));
    this.#readMovingPhase();
  }

  #readMovingPhase() {
    InputView.readMoving(this.#aa.bind(this));
  }

  #aa(moving) {}
}

module.exports = BridgeGameController;
