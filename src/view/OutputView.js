const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printIntialMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printCompareResult(result) {
    const { ball, strike } = result;
    if (ball === 0 && strike === 0) {
      Console.print(`낫싱`);
      return;
    }
    let ballAndStirke = [];
    if (ball > 0) ballAndStirke.push(`${ball}볼`);
    if (strike > 0) ballAndStirke.push(`${strike}스트라이크`);

    Console.print(ballAndStirke.join(' '))
  }
};

module.exports = OutputView;