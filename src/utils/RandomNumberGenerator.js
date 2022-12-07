const { Random } = require("@woowacourse/mission-utils");

const RandomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(1, 9);
  }
};

module.exports = RandomNumberGenerator;