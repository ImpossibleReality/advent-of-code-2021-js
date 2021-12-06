import { getInput } from "../utils.js";

let input = await getInput();
input = input
  .map((inst) => inst.split(" "))
  .map((inst) => [inst[0], parseInt(inst[1])]);
let totalDepth = 0;
let totalShift = 0;

input.forEach((instruction) => {
  if (instruction[0] === "up") {
    totalDepth -= instruction[1];
  } else if (instruction[0] === "down") {
    totalDepth += instruction[1];
  } else if (instruction[0] === "forward") {
    totalShift += instruction[1];
  }
});

console.log("----- PART 1 -----");
console.log("Final depth: " + totalDepth);
console.log("Final shift: " + totalShift);
console.log("Multiplied: " + totalDepth * totalShift);

let aim = 0;
let depth = 0;
let shift = 0;

input.forEach((instruction) => {
  if (instruction[0] === "up") {
    aim -= instruction[1];
  } else if (instruction[0] === "down") {
    aim += instruction[1];
  } else if (instruction[0] === "forward") {
    shift += instruction[1];
    depth += instruction[1] * aim;
  }
});

console.log("\n----- PART 2 -----");
console.log("Final depth: " + depth);
console.log("Final shift: " + shift);
console.log("Multiplied: " + depth * shift);
