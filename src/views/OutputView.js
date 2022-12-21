const { Console } = require('@woowacourse/mission-utils');
const { PRINT_MESSAGE } = require('../constants/constants');
const { ascendingSort } = require('../utils/utils');

const OutputView = {
  printLottoPurchaseCount(count) {
    Console.print(PRINT_MESSAGE.lottoPurchaseCount(count));
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(
        PRINT_MESSAGE.lottos(
          ascendingSort(lotto).join(PRINT_MESSAGE.lottoSeperator)
        )
      );
    });
  },

  printResultTitle() {
    Console.print(PRINT_MESSAGE.resultTitle);
  },

  printWinningResult(result) {
    result.forEach((gradeCount, grade) => {
      Console.print(PRINT_MESSAGE.winningResult(grade, gradeCount));
    });
  },

  printProfitRate(profitRate) {
    Console.print(PRINT_MESSAGE.profitRate(profitRate));
  },

  end() {
    Console.close();
  },
};

module.exports = OutputView;
