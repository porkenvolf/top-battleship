export default class Gameboard {
  #board = [];

  #ships = [];

  constructor(x = 1, y = 1) {
    for (let i = 0; i < x; i++) {
      this.#board[i] = [];
      for (let j = 0; j < y; j++) {
        this.#board[i].push(" ");
      }
    }
  }

  placeShip(x, y, ship) {
    const x1 = x;
    const y1 = y;
    const x2 = ship.getAxis()[0] * ship.getLength() + x1;
    const y2 = ship.getAxis()[1] * ship.getLength() + y1;

    if (this.#checkValid(x1, y1, x2, y2)) {
      this.#ships.push({ ship, x, y });
      this.#updateBoard();
      return true;
    }
    return false;
  }

  getBoard() {
    return this.#board;
  }

  #updateBoard() {
    this.#ships.forEach((ship) => {
      const x1 = ship.x;
      const y1 = ship.y;
      const x2 = ship.ship.getAxis()[0] * ship.ship.getLength() + x1;
      const y2 = ship.ship.getAxis()[1] * ship.ship.getLength() + y1;

      for (let i = x1; i <= x2; i++) {
        for (let j = y1; j <= y2; j++) {
          this.#board[i][j] = "S";
        }
      }
    });
  }

  #checkValid(x1, y1, _x2 = null, _y2 = null) {
    if (
      x1 < 0 ||
      y1 < 0 ||
      x1 >= this.#board.length ||
      y1 >= this.#board[0].length ||
      _x2 < 0 ||
      _y2 < 0 ||
      _x2 >= this.#board.length ||
      _y2 >= this.#board[0].length
    ) {
      return false;
    }

    let x2;
    let y2;
    if (!_x2 || !_y2) {
      x2 = x1;
      y2 = y1;
    }
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (this.#board[i][j] !== " ") return false;
      }
    }

    return true;
  }
}
