const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { handleError } = require('../utils/ErrorHandler');

class View {
  #input;
  #output;

  constructor() {
    this.#input = InputView;
    this.#output = OutputView;
  }

  readBridgeSize(callback) {
    this.#input.readBridgeSize(
      handleError(this.readBridgeSize.bind(this), callback)
    );
  }

  readMoving(callback) {
    this.#input.readMoving(handleError(this.readMoving.bind(this), callback));
  }

  readGameCommand(callback) {
    this.#input.readGameCommand(
      handleError(this.readGameCommand.bind(this), callback)
    );
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
