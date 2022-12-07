const BaseballGameController = require("./controller/BaseballGameController");

class App {
  play() {
    new BaseballGameController().start();
  }
}

const ap = new App();
ap.play();

module.exports = App;
