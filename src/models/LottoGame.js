const LottoNumberGeneartor = require('../utils/LottoNumberGenerator');
const Lotto = require('./Lotto');

class LottoGame {
  #purchaseMoney;
  #lottos = [];

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
  }

  issueLottos() {
    while (this.#lottos.length !== this.#purchaseMoney / 1000)
      this.#lottos.push(new Lotto(LottoNumberGeneartor.generate()));
  }
}

module.exports = LottoGame;
