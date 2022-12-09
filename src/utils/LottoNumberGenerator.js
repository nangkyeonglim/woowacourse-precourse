const { Random } = require('@woowacourse/mission-utils');

const LottoNumberGeneartor = {
  generate() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

module.exports = LottoNumberGeneartor;
