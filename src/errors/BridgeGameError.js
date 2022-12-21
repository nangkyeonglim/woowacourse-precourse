const CustomError = require('./CustomError');

class BridgeSizeError extends CustomError {}
class MovingError extends CustomError {}
class GameCommandError extends CustomError {}
class InvalidInputError extends CustomError {}

module.exports = {
  BridgeSizeError,
  MovingError,
  GameCommandError,
  InvalidInputError,
};
