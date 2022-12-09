const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printLottoPurchaseCount(count) {
    Console.print(`${count}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  },
};

module.exports = OutputView;
