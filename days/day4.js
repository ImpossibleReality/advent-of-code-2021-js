import { getInput } from "../utils.js";
import _ from "lodash";

let input = await getInput();

let numbers = input[0].split(",").map((n) => parseInt(n));
let boards = input
  .slice(2)
  .join("\n")
  .split("\n\n")
  .map((b) =>
    b.split("\n").map((r) =>
      r
        .split(" ")
        .filter((n) => n !== "")
        .map((n) => parseInt(n))
    )
  );

function updateBoard(board, i, number) {
  board.forEach((row, r) => {
    row.forEach((num, n) => {
      if (num === number) {
        boards[i][r][n] = "X";
      }
    });
  });
  let updatedBoard = boards[i];

  let bingo = false;

  // check rows
  updatedBoard.forEach((row) => {
    if (row.every((n) => n === "X")) {
      bingo = true;
    }
  });
  // check columns
  _.zip(...updatedBoard).forEach((col) => {
    if (col.every((n) => n === "X")) {
      bingo = true;
    }
  });

  return bingo;
}

let finalBoard = false;
let done = false;
let lastNum = 0;
numbers.forEach((num) => {
  boards.forEach((brd, i) => {
    if (!done) {
      if (updateBoard(brd, i, num)) {
        finalBoard = brd;
        lastNum = num;
        done = true;
      }
    }
  });
});

let total = 0;
_.flatten(finalBoard).forEach((n) => {
  if (n !== "X") {
    total += n;
  }
});

console.log("--- PART 1 ---");
console.log("Score: " + total * lastNum);

finalBoard = null;
let winningBoards = [];
lastNum = 0;
numbers.forEach((num) => {
  boards.forEach((brd, i) => {
    if (!winningBoards.includes(i)) {
      if (updateBoard(brd, i, num)) {
        finalBoard = brd;
        winningBoards.push(i);
        lastNum = num;
      }
    }
  });
});

total = 0;
console.log(finalBoard);
_.flatten(finalBoard).forEach((n) => {
  if (n !== "X") {
    total += n;
  }
});

console.log("\n--- PART 2 ---");
console.log("Score: " + total * lastNum);
