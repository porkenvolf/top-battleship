import Player from "./Player";
import Gameboard from "./Gameboard";

export default class Game {
  #state;

  #players = [];

  constructor() {
    this.shipsTemplate = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];
    const boardTemplate = [10, 10];

    // create players
    this.#players.push(
      new Player(
        "player 1",
        new Gameboard(boardTemplate, this.shipsTemplate).randomizeShips(),
      ),
    );
    this.#players.push(
      new Player(
        "player 2",
        new Gameboard(boardTemplate, this.shipsTemplate).randomizeShips(),
      ),
    );
  }

  getPlayers() {
    return this.#players;
  }
}
