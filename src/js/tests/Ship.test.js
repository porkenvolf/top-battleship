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
  expect(testShip1.getAxis()).toEqual([1, 0]);
  expect(testShip2.getAxis()).toEqual([0, 1]);
});
test("getLength() works", () => {
  const testShip1 = new Ship(2, "x");
  const testShip2 = new Ship(5, "y");
  expect(testShip1.getLength()).toBe(2);
  expect(testShip2.getLength()).toBe(5);
});
