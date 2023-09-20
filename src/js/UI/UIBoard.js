import UIComponent from "./UIComponent";
import Pubsub from "../modules/Pubsub";

import "../../css/UI/UIBoard.css";

export default class UIBoard extends UIComponent {
  constructor(gameBoardObject) {
    super();
    this.getContainer().id = "UIBoard";
    this.gameBoardObject = gameBoardObject;

    const x = gameBoardObject.getBoard().length;
    const y = gameBoardObject.getBoard()[0].length;

    this.getContainer().style.gridTemplateColumns = `repeat(${x},1fr)`;
    this.getContainer().style.gridTemplateRows = `repeat(${y},1fr)`;

    for (let i = 0; i < x * y; i++) {
      const tile = document.createElement("div");
      tile.classList = "tile";
      tile.setAttribute("data-col", i % y);
      tile.setAttribute("data-row", Math.floor(i / 10));

      this.getContainer().append(tile);
    }

    this.bindEvents();
    this.render();
  }

  render(isOwn = true) {
    const newRender = this.gameBoardObject.render(isOwn);

    for (let i = 0; i < this.gameBoardObject.getBoard().length; i++) {
      for (let j = 0; j < this.gameBoardObject.getBoard()[0].length; j++) {
        const UItile = this.getContainer().querySelector(
          `.tile[data-row="${i}"][data-col="${j}"]`,
        );
        UItile.innerText = newRender[i][j];
      }
    }
  }

  bindEvents() {
    /* Pubsub.on("UI.renderBoard", () => {
      this.render();
    }); */
  }
}
