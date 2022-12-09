const OutputView = require('../views/OutputView');

class BridgeGameController {
  start() {
    OutputView.printInitialMessage();
  }
}

module.exports = BridgeGameController;
