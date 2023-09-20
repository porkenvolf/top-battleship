import UIComponent from "./UIComponent";
import "../../css/UI/Obfuscator.css";

export default class Obfuscator extends UIComponent {
  constructor(name = "the next player") {
    super();
    this.getContainer().id = "Obfuscator";
    this.bindEvents();
    const text = document.createElement("div");
    text.innerText = `Please pass the device to ${name}`;
    this.getContainer().append(text);
  }

  bindEvents() {
    this.getContainer().addEventListener("click", () => {
      this.getContainer().remove();
    });
  }
}
