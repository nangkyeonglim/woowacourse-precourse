const LottoGameController = require('./controller/LottoGameController');

class App {
  play() {
    new LottoGameController().start();
  }
}

const app = new App();
app.play();

module.exports = App;
