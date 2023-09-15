import UIComponent from "./UIComponent";
import Game from "../modules/Game";
import PlayerView from "./PlayerView";
import Pubsub from "../modules/Pubsub";

export default class App extends UIComponent {
  constructor() {
    super();
    this.stateManager();
    this.game = new Game();
    this.playerViews = [];

    this.game.getPlayers().forEach((player) => {
      const pv = new PlayerView(player);
      this.playerViews.push(pv);
    });

    // start game
    Pubsub.emit("setupPlayer", 0);
  }

  stateManager() {
    Pubsub.on("setupPlayer", (playerId) => {
      this.getContainer().append(this.playerViews[playerId].getContainer());
    });
  }
}
