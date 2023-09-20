import UIComponent from "./UIComponent";
import Game from "../modules/Game";
import PlayerView from "./PlayerView";
import Pubsub from "../modules/Pubsub";

export default class App extends UIComponent {
  constructor() {
    super();
    this.game = new Game();

    // create a playerView for each player
    this.playerViews = [];
    this.game.getPlayers().forEach((player) => {
      const pv = new PlayerView(player);
      this.playerViews.push(pv);
    });

    // start game

    this.stateManager();
    Pubsub.emit("UI.playTurn", 0);
  }

  stateManager() {
    Pubsub.on("UI.setupPlayer", (playerId) => {
      const playerView = this.playerViews[playerId];

      playerView
        .setInfo("Please set up your ships")
        .getUIBoard()
        .getContainer()
        .querySelectorAll(".tile")
        .forEach((tile) => {
          tile.addEventListener("click", (event) => {
            console.log(event.target);
          });
        });

      this.getContainer().append(playerView.getContainer());
    });

    Pubsub.on("UI.playTurn", (playerID) => {
      const otherPlayerID = playerID === 0 ? 1 : 0;
      this.playerViews[otherPlayerID]
        .getUIBoard()
        .getContainer()
        .querySelectorAll(".tile")
        .forEach((tile) => {
          tile.addEventListener("click", (event) => {
            console.log(event.target);
            const row = event.target.getAttribute("data-row");
            const col = event.target.getAttribute("data-col");
            const attack = this.game
              .getPlayers()
              [otherPlayerID].getBoard()
              .receiveAttack(row, col);
            if (attack) Pubsub.emit("UI.playTurn", otherPlayerID);
          });
        });
      this.playerViews[otherPlayerID].getUIBoard().render();

      this.getContainer().append(this.playerViews[playerID].getContainer());
      this.getContainer().append(
        this.playerViews[otherPlayerID].getContainer(),
      );
    });
  }
}
