const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('../constants/constants');

const LottoNumberGeneartor = {
  generate() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.min,
      LOTTO.max,
      LOTTO.numberCount
    );
  },
};

module.exports = LottoNumberGeneartor;
