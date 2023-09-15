import UIComponent from "./UIComponent";
import Game from "../modules/Game";
import PlayerView from "./PlayerView";

export default class App extends UIComponent {
  constructor() {
    super();

    this.game = new Game();

    const playerView = new PlayerView(
      this.game.getPlayers()[0],
      this.game.getPlayers()[1],
    );

    this.getContainer().append(playerView.getContainer());
  }
}
