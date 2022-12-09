const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readPurchaseMoney(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', callback);
  },

  readWinningNumber(callback) {
    Console.readLine('당첨 번호를 입력해 주세요.\n', callback);
  },
};

module.exports = InputView;
