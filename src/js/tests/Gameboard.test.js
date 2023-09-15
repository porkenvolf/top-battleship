import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";
const x = 10;
const y = 10;
const testBoard = new Gameboard([x, y]);

afterEach(() => {
  console.table(testBoard.renderCli());
});

test("Board constructor works", () => {
  expect(testBoard.getBoard().length).toBe(x);
  expect(testBoard.getBoard()[0].length).toBe(y);
});

test("placeShip() works in a valid set of tiles, vertical", () => {
  const length = 3;
  const testShip = new Ship(length, "x");
  expect(testBoard.placeShip(4, 2, testShip)).toBe(true);
});
test("placeShip() works in a valid set of tiles, horizontal", () => {
  const length = 3;
  const testShip = new Ship(length, "y");
  expect(testBoard.placeShip(1, 5, testShip)).toBe(true);
});
test("placeShip() when out of bounds", () => {
  const length = 3;
  const testShip = new Ship(length, "x");
  expect(testBoard.placeShip(8, 3, testShip)).toBe(false);
});
test("placeShip() when atempting ship superposition", () => {
  const length = 3;
  const testShip = new Ship(length, "y");
  expect(testBoard.placeShip(5, 2, testShip)).toBe(false);
});
test("check ship from the board against Ship class", () => {
  expect(testBoard.getBoard()[4][2].obj instanceof Ship).toBe(true);
});
test("receive attack cant only hit the same tile once", () => {
  expect(testBoard.receiveAttack(0, 2)).toBe(true);
  expect(testBoard.receiveAttack(0, 2)).toBe(false);
});
test("Check that every tile of the ship references the same object", () => {
  expect(
    testBoard.getBoard()[4][2].obj === testBoard.getBoard()[5][2].obj,
  ).toBe(true);
  expect(
    testBoard.getBoard()[6][2].obj === testBoard.getBoard()[5][2].obj,
  ).toBe(true);
});
test("sink a ship", () => {
  testBoard.receiveAttack(4, 2);
  testBoard.receiveAttack(5, 2);
  testBoard.receiveAttack(6, 2);
  expect(testBoard.getBoard()[5][2].obj.isSunk()).toBe(true);
});
