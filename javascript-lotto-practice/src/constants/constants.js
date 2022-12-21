const { localeString, roundToTwo } = require('../utils/utils');

const LOTTO = Object.freeze({
  min: 1,
  max: 45,
  numberCount: 6,
  price: 1_000,
});

const GRADE = {
  first: {
    name: 'first',
    duplicateCount: 6,
    extraText: '',
    prize: 2_000_000_000,
  },
  second: {
    name: 'second',
    duplicateCount: 5,
    extraText: ', 보너스 볼 일치',
    prize: 30_000_000,
  },
  third: {
    name: 'third',
    duplicateCount: 5,
    extraText: '',
    prize: 1_500_000,
  },
  fourth: {
    name: 'fourth',
    duplicateCount: 4,
    extraText: '',
    prize: 50_000,
  },
  fifth: {
    name: 'fifth',
    duplicateCount: 3,
    extraText: '',
    prize: 5_000,
  },
};

const READ_MESSAGE = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.\n',
  winningNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const PRINT_MESSAGE = Object.freeze({
  lottoPurchaseCount: (count) => `\n${count}개를 구매했습니다.`,
  lottos: (lotto) => `[${lotto}]`,
  lottoSeperator: ', ',
  resultTitle: `\n당첨통계\n---`,
  winningResult: (grade, gradeCount) =>
    `${GRADE[grade].duplicateCount}개 일치${
      GRADE[grade].extraText
    } (${localeString(GRADE[grade].prize)}원) - ${gradeCount}개`,
  profitRate: (profitRate) =>
    `총 수익률은 ${localeString(roundToTwo(profitRate))}%입니다.`,
});

module.exports = {
  LOTTO,
  GRADE,
  READ_MESSAGE,
  PRINT_MESSAGE,
};
