import { getInput } from "../utils.js";

let input = await getInput();

let fishes = input[0].split(",").map((n) => parseInt(n));

function tick() {
  fishes.forEach((f, i) => {
    if (f === 0) {
      fishes.push(8);
      fishes[i] = 6;
    } else {
      fishes[i]--;
    }
  });
}

for (let i = 0; i < 256; i++) {
  tick();
}

console.log(fishes.length);
