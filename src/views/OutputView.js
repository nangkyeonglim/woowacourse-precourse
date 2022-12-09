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

  printResultTitle() {
    Console.print(`당첨통계\n---`);
  },

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },
};

module.exports = OutputView;
