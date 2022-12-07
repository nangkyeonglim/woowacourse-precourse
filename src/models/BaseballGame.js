class BaseballGame {
  compareNumber(userNumber, computerNumber) {
    const result = {
      strike: 0,
      ball: 0,
    };
    
    userNumber.forEach((num, index) => {
      if (num === computerNumber[index]) result.strike += 1;
      else if (computerNumber.includes(num)) result.ball += 1;
    });
    return result;
  }
}

module.exports = BaseballGame;
