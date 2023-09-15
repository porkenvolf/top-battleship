export default class UIComponent {
  #container;

  constructor() {
    this.#container = document.createElement("div");
  }

  getContainer() {
    return this.#container;
  }
}
