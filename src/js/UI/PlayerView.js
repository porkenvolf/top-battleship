import UIComponent from "./UIComponent";
import UIBoard from "./UIBoard";
import "../../css/UI/PlayerView.css";

export default class PlayerView extends UIComponent {
  #player;

  constructor(player) {
    super();
    this.getContainer().id = "PlayerView";

    this.#player = player;
    // Player name
    const playerName = document.createElement("div");
    this.getContainer().append(playerName);
    playerName.innerText = player.name;

    //
    this.divInfo = document.createElement("div");
    this.getContainer().append(this.divInfo);

    // My board
    this.myBoard = new UIBoard(player.getBoard());
    this.getContainer().append(this.myBoard.getContainer());
  }

  setInfo(msg) {
    this.divInfo.innerText = msg;
    return this;
  }

  getUIBoard() {
    return this.myBoard;
  }
}
