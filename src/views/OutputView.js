const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE, RESULT_MAP } = require('../constants/constants');

const OutputView = {
  printInitialMessage() {
    Console.print(OUTPUT_MESSAGE.initial);
  },

  printMap(resultMap) {
    resultMap.forEach((directionMap) => {
      Console.print(
        RESULT_MAP.printOneLine(directionMap.join(RESULT_MAP.seperator))
      );
    });
    this.printNewLine();
  },

  printResult(resultMap, success, attempts) {
    Console.print(OUTPUT_MESSAGE.resultTitle);
    this.printMap(resultMap);
    Console.print(OUTPUT_MESSAGE.success(success));
    Console.print(OUTPUT_MESSAGE.attempts(attempts));
  },

  printNewLine() {
    Console.print('');
  },

  close() {
    Console.close();
  },
};

module.exports = OutputView;
