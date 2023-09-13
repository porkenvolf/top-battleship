import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";
const x = 10;
const y = 10;
const testBoard = new Gameboard(x, y);

afterEach(() => {
  console.table(testBoard.getBoard());
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
  expect(testBoard.getBoard()[4][2] instanceof Ship).toBe(true);
});
