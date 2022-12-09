const ComputerNumberMaker = {
  makeComputerNumber(size, generateRandomNumber) {
    const computer = new Set();
    while (computer.size < size) computer.add(generateRandomNumber());
    return [...computer];
  },
};

module.exports = ComputerNumberMaker;
