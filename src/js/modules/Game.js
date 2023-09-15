import Player from "./Player";
import Gameboard from "./Gameboard";

export default class Game {
  #state;

  #players = [];

  constructor() {
    // State
    // 0 = player 1 set up ships
    // 1 = player 2 set up ships
    // 2 = playing
    // 3 = game ended
    this.#state = 0;

    const shipsTemplate = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];
    const boardTemplate = [10, 10];

    this.#players.push(new Player("player1", new Gameboard(boardTemplate)));
    this.#players.push(new Player("player2", new Gameboard(boardTemplate)));
  }

  getPlayers() {
    return this.#players;
  }
}
