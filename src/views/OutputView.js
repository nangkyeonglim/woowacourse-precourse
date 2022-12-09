const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printInitialMessage() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printMap(resultMap) {
    resultMap.forEach((directionMap) => {
      Console.print(`[ ${directionMap.join(' | ')} ]`);
    });
  },

  printResult(resultMap, success, attempts) {
    Console.print('최종 게임 결과');
    this.printMap(resultMap);
    Console.print(`게임 성공 여부: ${success ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${attempts}`);
  },

  close() {
    Console.close();
  },
};

module.exports = OutputView;
