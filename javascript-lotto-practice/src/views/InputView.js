const { Console } = require('@woowacourse/mission-utils');
const { READ_MESSAGE } = require('../constants/constants');

const InputView = {
  readPurchaseMoney(callback) {
    Console.readLine(READ_MESSAGE.purchaseMoney, callback);
  },

  readWinningNumber(callback) {
    Console.readLine(READ_MESSAGE.winningNumber, callback);
  },

  readBonusNumber(callback) {
    Console.readLine(READ_MESSAGE.bonusNumber, callback);
  },
};

module.exports = InputView;
