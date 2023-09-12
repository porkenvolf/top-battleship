import Gameboard from "../modules/Gameboard";

test("Board constructor works", () => {
  const x = 5;
  const y = 4;
  const testBoard = new Gameboard(x, y);
  console.table(testBoard.getBoard());
  expect(testBoard.getBoard().length).toBe(x);
  expect(testBoard.getBoard()[0].length).toBe(y);
});
