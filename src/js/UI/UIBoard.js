import UIComponent from "./UIComponent";

import "../../css/UI/UIBoard.css";

export default class UIBoard extends UIComponent {
  constructor(gameBoardObject) {
    super();
    this.getContainer().id = "UIBoard";

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
  }
}
