const BridgeGameController = require('./controller/BridgeGameController');

class App {
  play() {
    new BridgeGameController().start();
  }
}

const app = new App();
app.play();

module.exports = App;
