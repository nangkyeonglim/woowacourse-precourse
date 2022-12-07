const BaseballGame = require("../models/BaseballGame");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const ComputerNumberMaker = require('../utils/ComputerNumberMaker');
const RandomNumberGenerator = require('../utils/RandomNumberGenerator');

class BaseballGameController {
  #baseballGame;

  start() {
    OutputView.printIntialMessage();
    this.makebaseBallGamePhase();
  }    

  makebaseBallGamePhase() {
    this.#baseballGame = new BaseballGame(ComputerNumberMaker.makeComputerNumber(3, RandomNumberGenerator.generate));
    this.readUserNumberPhase();
  }
}

module.exports = BaseballGameController;