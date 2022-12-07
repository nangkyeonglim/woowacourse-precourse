const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constants/constants");

const InputView = {
  readUserNumber(callback) {
    Console.readLine(MESSAGE.readUserNumber, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.readGameCommand, callback);
  }
};

module.exports = InputView;
