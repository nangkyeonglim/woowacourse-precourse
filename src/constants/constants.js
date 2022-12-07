const GAME_COMMAND = {
  retry: '1',
  quit: '2',
};

const NUMBER = {
  min: 1,
  max: 9,
  length: 3,
};

const GAME_RESULT = {
  nothing: '낫싱',
  ball: '볼',
  strike: '스트라이크',
};

const MESSAGE = {
  readUserNumber: '숫자를 입력해 주세요: ',
  readGameCommand: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n',
  printIntial: '숫자 야구 게임을 시작합니다.',
  printEnd: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
};

const ERROR = {
  isNotNumber: '[ERROR] 숫자만 입력해주세요',
  isNotRangeOfLength: '[ERROR] 3자리 숫자만 입력가능합니다',
  hasZero: '[ERROR] 1 ~ 9사이의 숫자만 입력 가능합니다',
  isDuplicated: '[ERROR] 중복되지 않는 숫자를 입력해주세요',
  invalidCommand: '[ERROR] 재시작: 1, 종료: 2 만 입력가능합니다',
};

module.exports = { 
  GAME_COMMAND, 
  GAME_RESULT, 
  NUMBER, 
  MESSAGE, 
};
