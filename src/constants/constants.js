const BRIDGE = Object.freeze({
  min: 3,
  max: 20,
});

const COMMAND = Object.freeze({
  retry: 'R',
  quit: 'Q',
  up: 'U',
  down: 'D',
});

const RESULT_MAP = Object.freeze({
  correct: 'O',
  wrong: 'X',
  empty: ' ',
  seperator: ' | ',
  printOneLine: (line) => `[ ${line} ]`,
});

const INPUT_MESSAGE = Object.freeze({
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  moving: `이동할 칸을 선택해주세요. (위: ${COMMAND.up}, 아래: ${COMMAND.down})\n`,
  gameCommand: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${COMMAND.retry}, 종료: ${COMMAND.quit})\n`,
});

const OUTPUT_MESSAGE = Object.freeze({
  initial: '다리 건너기 게임을 시작합니다.\n',
  resultTitle: '최종 게임 결과',
  success: (success) => `게임 성공 여부: ${success ? '성공' : '실패'}`,
  attempts: (attempts) => `총 시도한 횟수: ${attempts}`,
});

const ERROR = Object.freeze({
  prefix: (message) => `[Error] ${message}`,
  isNotNumber: '숫자만 입력가능합니다.',
  invalidRangeOfBridgeSize: `${BRIDGE.min} 부터 ${BRIDGE.max} 사이의 길이로만 생성 가능합니다.`,
  invalidMoving: `이동할 칸은 위: ${COMMAND.up}, 아래: ${COMMAND.down} 만 입력 가능합니다.`,
  invalidGameCommand: `재시도: ${COMMAND.retry}, 종료: ${COMMAND.quit} 만 입력 가능합니다.`,
});

module.exports = {
  BRIDGE,
  COMMAND,
  RESULT_MAP,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR,
};
