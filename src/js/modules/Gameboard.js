export default class Gameboard {
  #board = [];

  constructor(x = 1, y = 1) {
    for (let i = 0; i < x; i++) {
      this.#board[i] = [];
      for (let j = 0; j < y; j++) {
        this.#board[i].push(" ");
      }
    }
  }

  getBoard() {
    return this.#board;
  }
}
