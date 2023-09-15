import UIComponent from "./UIComponent";
import UIBoard from "./UIBoard";

export default class PlayerView extends UIComponent {
  constructor(player, opponent) {
    super();

    // Player name
    const playerName = document.createElement("div");
    this.getContainer().append(playerName);
    playerName.innerText = player.name;

    // My board
    const myBoard = new UIBoard(player.getBoard());
    this.getContainer().append(myBoard.getContainer());

    // Opponent name
    const opName = document.createElement("div");
    this.getContainer().append(opName);
    opName.innerText = opponent.name;

    // Their board
    const theirBoard = new UIBoard(opponent.getBoard());
    this.getContainer().append(theirBoard.getContainer());
  }
}
