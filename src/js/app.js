import read from './reader';
import json from './parser';

class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read().then((data) => json(data)));
    });
  }
}

export default GameSavingLoader;
