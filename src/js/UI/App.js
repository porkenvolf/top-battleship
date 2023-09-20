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
    Pubsub.on("UI.setupPlayer", (playerID) => {
      const playerView = this.playerViews[playerID];

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
      const otherplayerID = playerID === 0 ? 1 : 0;

      this.playerViews[playerID].getUIBoard().removeAllEventListeners();

      this.playerViews[otherplayerID]
        .getUIBoard()
        .removeAllEventListeners()
        .getContainer()
        .querySelectorAll(".tile")
        .forEach((tile) => {
          tile.addEventListener("click", (event) => {
            console.log(event.target);
            const row = event.target.getAttribute("data-row");
            const col = event.target.getAttribute("data-col");
            const attack = this.game
              .getPlayers()
              [otherplayerID].getBoard()
              .receiveAttack(row, col);
            if (attack) {
              Pubsub.emit("UI.playTurn", otherplayerID);
            }
          });
        });

      this.playerViews[otherplayerID].getUIBoard().render(false);
      this.playerViews[playerID].getUIBoard().render();

      // appends
      this.getContainer().append(
        this.playerViews[otherplayerID].getContainer(),
      );
      this.getContainer().append(this.playerViews[playerID].getContainer());
    });
  }
}
