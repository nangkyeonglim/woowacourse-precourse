const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readUserNumber(callback) {
    Console.readLine('숫자를 입력해 주세요: ', callback);
  },

  readGameCommand(callback) {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n', callback);
  }
};

module.exports = InputView;