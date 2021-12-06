import { getInput } from "../utils.js";

function enumerateLine([[x1, y1], [x2, y2]]) {
  if (x1 === x2) {
    const start = y1 < y2 ? y1 : y2;
    const length = Math.abs(y1 - y2) + 1;
    return Array.from({ length }, (_, i) => [x1, start + i]);
  } else {
    const start = x1 < x2 ? x1 : x2;
    const length = Math.abs(x1 - x2) + 1;
    return Array.from({ length }, (_, i) => [start + i, y1]);
  }
}

let diagonalLines = await getInput();

diagonalLines = diagonalLines.map((line) =>
  line.split(" -> ").map((c) => c.split(",").map((n) => parseInt(n)))
);

let lines = diagonalLines.filter(
  ([[x1, y1], [x2, y2]]) => x1 === x2 || y1 === y2
);

let overlaps = {};

lines.forEach((line) => {
  enumerateLine(line).forEach((item) => {
    if (overlaps[`${item[0]},${item[1]}`]) {
      overlaps[`${item[0]},${item[1]}`] += 1;
    } else {
      overlaps[`${item[0]},${item[1]}`] = 1;
    }
  });
});

let totalMoreThan2 = 0;
for (const [pos, count] of Object.entries(overlaps)) {
  if (count >= 2) {
    totalMoreThan2 += 1;
  }
}
console.log("--- PART 1 ---");
console.log("Dangerous Areas: " + totalMoreThan2);

// PART 2
function enumerateDiagonalLine([[x1, y1], [x2, y2]]) {
  if (x1 === x2) {
    const start = y1 < y2 ? y1 : y2;
    const length = Math.abs(y1 - y2) + 1;
    return Array.from({ length }, (_, i) => [x1, start + i]);
  } else if (y1 === y2) {
    const start = x1 < x2 ? x1 : x2;
    const length = Math.abs(x1 - x2) + 1;
    return Array.from({ length }, (_, i) => [start + i, y1]);
  } else {
    const length = Math.abs(x1 - x2) + 1;
    const xChange = (x1 - x2) / Math.abs(x1 - x2);
    const yChange = (y1 - y2) / Math.abs(y1 - y2);
    return Array.from({ length }, (_, i) => [
      x1 - xChange * i,
      y1 - yChange * i,
    ]);
  }
}

overlaps = {};

diagonalLines.forEach((line) => {
  enumerateDiagonalLine(line).forEach((item) => {
    if (overlaps[`${item[0]},${item[1]}`]) {
      overlaps[`${item[0]},${item[1]}`] += 1;
    } else {
      overlaps[`${item[0]},${item[1]}`] = 1;
    }
  });
});

totalMoreThan2 = 0;
for (const [pos, count] of Object.entries(overlaps)) {
  if (count >= 2) {
    totalMoreThan2 += 1;
  }
}
console.log("\n--- PART 2 ---");
console.log("Dangerous areas: " + totalMoreThan2);
