const BridgeGameController = require('./controller/BridgeGameController');
const View = require('./views/View');
class App {
  play() {
    new BridgeGameController(new View()).start();
  }
}

const app = new App();
app.play();

module.exports = App;
