const Lotto = require('../models/Lotto');
const LottoGame = require('../models/LottoGame');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class LottoGameController {
  #lottoGame;

  start() {
    InputView.readPurchaseMoney(this.#handleIssueLottoPhase.bind(this));
  }

  #handleIssueLottoPhase(purchaseMoney) {
    this.#lottoGame = new LottoGame(Number(purchaseMoney));
    this.#lottoGame.issueLottos();
    OutputView.printLottoPurchaseCount(this.#lottoGame.getLottosCount());
    OutputView.printLottos(this.#lottoGame.getLottos());
    this.#readWinningNumberPhase();
  }

  #readWinningNumberPhase() {
    InputView.readWinningNumber(this.#readBonusNumberPhase.bind(this));
  }

  #readBonusNumberPhase(winningNumber) {
    this.winningLotto = new Lotto(winningNumber.split(',').map(Number));
    InputView.readBonusNumber(this.#handleCalculateResultPhase.bind(this));
  }

  #handleCalculateResultPhase(bonusNumber) {
    this.#lottoGame.calculateWinningResult(
      this.winningLotto.getNumbers(),
      Number(bonusNumber)
    );
    this.#handlePrintGameResultPhase();
  }

  #handlePrintGameResultPhase() {
    OutputView.printResultTitle();
    OutputView.printWinningResult(this.#lottoGame.getGrade());
    OutputView.printProfitRate(this.#lottoGame.calculateProfitRate());
  }
}

module.exports = LottoGameController;
