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
    this.#lottoGame = new LottoGame(purchaseMoney);
    this.#lottoGame.issueLottos();
    OutputView.printLottoPurchaseCount(this.#lottoGame.getLottosCount());
    OutputView.printLottos(this.#lottoGame.getLottos());
    this.#readWinningNumberPhase();
  }

  #readWinningNumberPhase() {
    InputView.readWinningNumber();
  }
}

module.exports = LottoGameController;
