export default class Player {
  #board;

  constructor(name, gameboard) {
    this.name = name;
    this.#board = gameboard;
  }

  getBoard() {
    return this.#board;
  }
}
