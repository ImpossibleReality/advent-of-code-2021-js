import { getInput } from "../utils.js";

let input = await getInput();
input = input.map((num) => parseInt(num));

let increases = 0;

for (let i = 1; i < input.length; i++) {
  if (input[i] > input[i - 1]) {
    increases++;
  }
}

console.log("individual increases: " + increases);

increases = 0;

for (let i = 1; i < input.length - 2; i++) {
  if (
    input[i] + input[i + 1] + input[i + 2] >
    input[i - 1] + input[i] + input[i + 1]
  ) {
    increases++;
  }
}

console.log("window increases: " + increases);
