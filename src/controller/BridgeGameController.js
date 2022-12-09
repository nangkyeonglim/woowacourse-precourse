const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeGameController {
  start() {
    OutputView.printInitialMessage();
    this.#readBridgeSizePhase();
  }

  #readBridgeSizePhase() {
    InputView.readBridgeSize();
  }
}

module.exports = BridgeGameController;
