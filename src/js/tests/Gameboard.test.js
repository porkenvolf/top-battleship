import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

test("Board constructor works", () => {
  const x = 5;
  const y = 4;
  const testBoard = new Gameboard(x, y);
  expect(testBoard.getBoard().length).toBe(5);
  expect(testBoard.getBoard()[0].length).toBe(4);

  console.table(testBoard.getBoard());
});

test("placeShip() works", () => {
  const x = 5;
  const y = 4;
  const testBoard = new Gameboard(x, y);
  const length = 3;
  const testShip = new Ship(length, "x");
  expect(testBoard.placeShip(0, 0, testShip)).toBe(true);
  console.table(testBoard.getBoard());
});
