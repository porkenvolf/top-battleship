import UIComponent from "./UIComponent";
import Game from "../modules/Game";
import PlayerView from "./PlayerView";
import Pubsub from "../modules/Pubsub";
import Obfuscator from "./Obfuscator";

import "../../css/UI/App.css";

export default class App extends UIComponent {
  constructor() {
    super();

    this.getContainer().id = "App";

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
      this.removeAllEventListeners();

      const otherplayerID = playerID === 0 ? 1 : 0;

      while (this.getContainer().firstChild) {
        this.getContainer().removeChild(this.getContainer().firstChild);
      }
      // appends
      this.getContainer().append(
        this.playerViews[otherplayerID].getContainer(),
      );
      this.getContainer().append(this.playerViews[playerID].getContainer());

      this.getContainer().append(
        new Obfuscator(this.game.getPlayers()[playerID].name).getContainer(),
      );

      this.playerViews[otherplayerID].getUIBoard().render(false);
      this.playerViews[playerID]
        .getUIBoard()
        .removeAllEventListeners()
        .render();

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
              this.playerViews[otherplayerID].getUIBoard().render(false);
              Pubsub.emit("UI.resultFeedback", playerID);
            }
          });
        });
    });

    Pubsub.on("UI.resultFeedback", (playerID) => {
      const otherplayerID = playerID === 0 ? 1 : 0;

      this.removeAllEventListeners();
      this.getContainer().addEventListener("click", () => {
        Pubsub.emit("UI.playTurn", otherplayerID);
      });
    });
  }
}
