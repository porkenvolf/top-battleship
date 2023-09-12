/* eslint-disable no-undef */
import Ship from "../modules/Ship";

test("hit() and isSunk() work", () => {
  const testShip = new Ship(2, "x");
  expect(testShip.hit().isSunk()).toBe(false);
  expect(testShip.hit().isSunk()).toBe(true);
});

test("getAxis() works", () => {
  const testShip1 = new Ship(2, "x");
  const testShip2 = new Ship(2, "y");
  expect(testShip1.getAxis()).toBe("x");
  expect(testShip2.getAxis()).toBe("y");
});
