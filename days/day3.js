import { getInput } from "../utils.js";
import _ from "lodash";

let input = await getInput();
input = input.map((item) => item.split("").map((i) => parseInt(i)));
input = _.zip(...input);

let gamma = [];

input.forEach((bit) => {
  let zeros = 0;
  let ones = 0;
  bit.forEach((v) => {
    if (v === 0) {
      zeros += 1;
    } else {
      ones += 1;
    }
  });
  gamma.push(ones > zeros ? 1 : 0);
});

let epsilon = gamma.map((v) => (v === 1 ? 0 : 1));

let gammaNum = parseInt(gamma.join(""), 2);
let epsilonNum = parseInt(epsilon.join(""), 2);

let powerConsumption = gammaNum * epsilonNum;

console.log("--- PART 1 ---");
console.log("Power consumption: " + powerConsumption);
