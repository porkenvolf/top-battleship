import Ship from "./Ship";
import Pubsub from "./Pubsub";

export default class Gameboard {
  #board = [];

  constructor(boardTemplate, shipsTemplate) {
    this.shipsTemplate = shipsTemplate;

    for (let i = 0; i < boardTemplate[0]; i++) {
      this.#board[i] = [];
      for (let j = 0; j < boardTemplate[1]; j++) {
        this.#board[i].push({ hit: false, obj: null });
      }
    }
  }

  placeShip(x, y, ship) {
    const x1 = x;
    const y1 = y;
    const x2 = ship.getAxis()[0] * (ship.getLength() - 1) + x1;
    const y2 = ship.getAxis()[1] * (ship.getLength() - 1) + y1;

    if (this.#checkValid(x1, y1, x2, y2)) {
      this.#updateBoard({ ship, x1, y1, x2, y2 });
      Pubsub.emit("UI.renderBoard");

      return true;
    }
    return false;
  }

  getBoard() {
    return this.#board;
  }

  receiveAttack(x, y) {
    if (this.#checkAlreadyHit(x, y)) return false;

    this.#board[x][y].hit = true;
    if (this.#board[x][y].obj) this.#board[x][y].obj.hit();

    Pubsub.emit("UI.renderBoard");

    return true;
  }

  render(isOwn = true) {
    const render = [];
    for (let i = 0; i < this.#board.length; i++) {
      render[i] = [];
      for (let j = 0; j < this.#board[0].length; j++) {
        if (!this.#board[i][j].hit && !isOwn) {
          render[i][j] = "O";
        } else if (this.#board[i][j].obj) {
          if (this.#board[i][j].obj.isSunk()) {
            render[i][j] = "X";
          } else {
            render[i][j] = "S";
          }
        } else {
          render[i][j] = "W";
        }
      }
    }
    return render;
  }

  #updateBoard({ ship, x1, y1, x2, y2 }) {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        this.#board[i][j].obj = ship;
      }
    }
  }

  #checkValid(x1, y1, _x2 = null, _y2 = null) {
    if (!this.#checkOutOfBounds(x1, y1, _x2, _y2)) return false;
    let x2;
    let y2;
    if (!_x2 || !_y2) {
      x2 = x1;
      y2 = y1;
    } else {
      x2 = _x2;
      y2 = _y2;
    }
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (this.#board[i][j].obj) return false;
      }
    }

    return true;
  }

  #checkOutOfBounds(x1, y1, _x2 = null, _y2 = null) {
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
    return true;
  }

  #checkAlreadyHit(x, y) {
    if (!this.#checkOutOfBounds(x, y)) return false;
    return this.#board[x][y].hit;
  }

  randomizeShips() {
    const shipsTemplateCopy = [...this.shipsTemplate];
    while (shipsTemplateCopy.length > 0) {
      const shipLength = shipsTemplateCopy[0];
      const rndAxis = Math.round(Math.random()) > 0 ? "x" : "y";
      const rndX = Math.floor(Math.random() * 10);
      const rndY = Math.floor(Math.random() * 10);

      const ship = new Ship(shipLength, rndAxis);
      if (this.placeShip(rndX, rndY, ship)) shipsTemplateCopy.shift();
    }
    return this;
  }
}
