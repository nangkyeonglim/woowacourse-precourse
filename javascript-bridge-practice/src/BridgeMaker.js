const { COMMAND } = require('./constants/constants');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => {
      return generateRandomNumber() ? COMMAND.up : COMMAND.down;
    });
  },
};

module.exports = BridgeMaker;
