const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, GAME_RESULT } = require("../constants/constants");

const OutputView = {
  printIntialMessage() {
    Console.print(MESSAGE.printIntial);
  },

  printCompareResult(result) {
    const { ball, strike } = result;
    if (ball === 0 && strike === 0) {
      Console.print(GAME_RESULT.nothing);
      return;
    }
    let ballAndStirke = [];
    if (ball > 0) ballAndStirke.push(`${ball}${GAME_RESULT.ball}`);
    if (strike > 0) ballAndStirke.push(`${strike}${GAME_RESULT.strike}`);

    Console.print(ballAndStirke.join(' '))
  },

  printEndMessage() {
    Console.print(MESSAGE.printEnd);
  },

  close() {
    Console.close();
  },
};

module.exports = OutputView;