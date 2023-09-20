export default class UIComponent {
  #container;

  constructor() {
    this.#container = document.createElement("div");
  }

  getContainer() {
    return this.#container;
  }

  removeAllEventListeners() {
    const clonedContainer = this.#container.cloneNode(true);
    this.#container.replaceWith(clonedContainer);
    this.#container = clonedContainer;
    return this;
  }
}
