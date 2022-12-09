const { Random } = require('@woowacourse/mission-utils');
const { NUMBER } = require('../constants/constants');

const RandomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(NUMBER.min, NUMBER.max);
  },
};

module.exports = RandomNumberGenerator;
