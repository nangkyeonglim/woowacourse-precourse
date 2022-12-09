const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constants/constants');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.bridgeSize, callback);
  },

  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.moving, callback);
  },

  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.gameCommand, callback);
  },
};

module.exports = InputView;
