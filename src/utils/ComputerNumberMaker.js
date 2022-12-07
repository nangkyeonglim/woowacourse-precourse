const ComputerNumberMaker = {
  makeComputerNumber(size, generateRandomNumber) {
    const computer = [];
    while (computer.length < size) {
      const number = generateRandomNumber();
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}