/* eslint-disable no-undef */
import Ship from "../modules/Ship";

test("hit() and isSunk() work", () => {
  const testShip = new Ship(2, "x");
  expect(testShip.hit().isSunk()).toBe(false);
  expect(testShip.hit().isSunk()).toBe(true);
});
