const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readUserNumber(callback) {
    Console.readLine('숫자를 입력해 주세요: ', callback);
  }
};

module.exports = InputView;