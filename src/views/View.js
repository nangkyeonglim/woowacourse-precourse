const Validator = require('../utils/Validator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class View {
  #input;
  #output;

  constructor() {
    this.#input = InputView;
    this.#output = OutputView;
  }

  readBridgeSize(callback) {
    this.#input.readBridgeSize(callback);
  }

  readMoving(callback) {
    this.#input.readMoving(callback);
  }

  readGameCommand(callback) {
    this.#input.readGameCommand(callback);
  }

  printInitialMessage() {
    this.#output.printInitialMessage();
  }

  printMap(resultMap) {
    this.#output.printMap(resultMap);
  }

  printResult(object) {
    this.#output.printResult(object);
  }

  printErrorMessage(message) {
    this.#output.printErrorMessage(message);
  }

  printNewLine() {
    this.#output.printNewLine();
  }

  close() {
    this.#output.close();
  }
}

module.exports = View;
