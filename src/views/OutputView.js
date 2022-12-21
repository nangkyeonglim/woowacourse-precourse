const { OUTPUT_MESSAGE, RESULT_MAP } = require('../constants/constants');
const { print, close } = require('../utils/IO');

const OutputView = {
  printInitialMessage() {
    print(OUTPUT_MESSAGE.initial);
  },

  printMap(resultMap) {
    resultMap.forEach((directionMap) => {
      print(RESULT_MAP.printOneLine(directionMap.join(RESULT_MAP.seperator)));
    });
    this.printNewLine();
  },

  printResult({ resultMap, success, attempts }) {
    print(OUTPUT_MESSAGE.resultTitle);
    this.printMap(resultMap);
    print(OUTPUT_MESSAGE.success(success));
    print(OUTPUT_MESSAGE.attempts(attempts));
  },

  printErrorMessage(message) {
    print(message);
    this.printNewLine();
  },

  printNewLine() {
    print('');
  },

  close() {
    close();
  },
};

module.exports = OutputView;
