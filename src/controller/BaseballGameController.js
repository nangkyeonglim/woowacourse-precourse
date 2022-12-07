const BaseballGame = require("../models/BaseballGame");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const ComputerNumberMaker = require('../utils/ComputerNumberMaker');
const RandomNumberGenerator = require('../utils/RandomNumberGenerator');
const Validator = require("../utils/Validator");

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

  readUserNumberPhase() {
    InputView.readUserNumber(this.answerCheckPhase.bind(this));
  }

  answerCheckPhase(userNumber) {
    Validator.checkUserNumber(userNumber);
    OutputView.printCompareResult(this.#baseballGame.compareNumber(userNumber));
    if (this.#baseballGame.isGameEnd()) {
      OutputView.printEndMessage();
      this.readGameCommandPhase();
      return;
    }
    this.readUserNumberPhase();
  }

  readGameCommandPhase() {
    InputView.readGameCommand(this.retryPhase.bind(this));
  }

  retryPhase(gameCommand) {
    Validator.checkGameCommand(gameCommand);
    if (gameCommand === '1') {
      this.makebaseBallGamePhase();
      return;
    }OutputView.close();
  }
}

module.exports = BaseballGameController;