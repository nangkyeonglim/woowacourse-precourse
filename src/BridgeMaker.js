const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => {
      return generateRandomNumber() ? 'U' : 'D';
    });
  },
};

module.exports = BridgeMaker;
