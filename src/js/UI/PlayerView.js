import UIComponent from "./UIComponent";
import UIBoard from "./UIBoard";
import Pubsub from "../modules/Pubsub";

export default class PlayerView extends UIComponent {
  #player;

  constructor(player) {
    super();

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
    this.stateManager();
  }

  stateManager() {
    Pubsub.on("setupPlayer", () => {
      this.divInfo.innerText = "Please set up your ships";

      const array = this.myBoard.getContainer().querySelectorAll(".tile");

      array.forEach((tile) => {
        tile.addEventListener("click", (event) => {
          console.log(event.target);
        });
      });
    });
  }
}
