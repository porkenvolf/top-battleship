export default class Ship {
  #length;

  #axis;

  #hits;

  constructor(length = 1, axis = x) {
    this.#length = length;
    this.#axis = axis;
    this.#hits = 0;
  }

  hit() {
    this.#hits += 1;
    return this;
  }

  isSunk() {
    return this.#hits >= this.#length;
  }

  getAxis() {
    return this.#axis;
  }

  getLength() {
    return this.#length;
  }
}