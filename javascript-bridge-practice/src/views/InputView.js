const { INPUT_MESSAGE } = require('../constants/constants');
const { read } = require('../utils/IO');

const InputView = {
  readBridgeSize(callback) {
    read(INPUT_MESSAGE.bridgeSize, callback);
  },

  readMoving(callback) {
    read(INPUT_MESSAGE.moving, callback);
  },

  readGameCommand(callback) {
    read(INPUT_MESSAGE.gameCommand, callback);
  },
};

module.exports = InputView;
