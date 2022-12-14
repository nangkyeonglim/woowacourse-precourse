const { Console } = require('@woowacourse/mission-utils');

const IO = {
  print(message) {
    Console.print(message);
  },

  read(query, callback) {
    Console.readLine(query, callback);
  },

  close() {
    Console.close();
  },
};

module.exports = IO;
