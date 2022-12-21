const OutputView = require('../views/OutputView');

const ErrorHandler = {
  handleError(callerFn, callback) {
    return (input) => {
      try {
        callback(input);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
        callerFn(callback);
      }
    };
  },
};

module.exports = ErrorHandler;
