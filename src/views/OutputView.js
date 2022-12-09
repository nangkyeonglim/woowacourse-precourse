const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printInitialMessage() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },
  printMap() {},

  printResult() {},

  close() {
    Console.close();
  },
};

module.exports = OutputView;
