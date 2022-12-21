const GAME_COMMAND = Object.freeze({
  retry: '1',
  quit: '2',
});

const NUMBER = Object.freeze({
  min: 1,
  max: 9,
  length: 3,
});

const GAME_RESULT = Object.freeze({
  nothing: '낫싱',
  ball: '볼',
  strike: '스트라이크',
});

const MESSAGE = Object.freeze({
  readUserNumber: '숫자를 입력해 주세요: ',
  readGameCommand: `게임을 새로 시작하려면 ${GAME_COMMAND.retry}, 종료하려면 ${GAME_COMMAND.quit}를 입력하세요\n`,
  printIntial: '숫자 야구 게임을 시작합니다.',
  printEnd: `${NUMBER.length}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
});

const ERROR = Object.freeze({
  prefix: (message) => `[ERROR] ${message}`,
  isNotNumber: '숫자만 입력해주세요',
  isNotRangeOfLength: `${NUMBER.length}자리 숫자만 입력가능합니다`,
  hasZero: `${NUMBER.min} ~ ${NUMBER.max}사이의 숫자만 입력 가능합니다`,
  isDuplicated: '중복되지 않는 숫자를 입력해주세요',
  invalidCommand: `재시작: ${GAME_COMMAND.retry}, 종료: ${GAME_COMMAND.quit} 만 입력가능합니다`,
});

module.exports = {
  GAME_COMMAND,
  GAME_RESULT,
  NUMBER,
  MESSAGE,
  ERROR,
};
