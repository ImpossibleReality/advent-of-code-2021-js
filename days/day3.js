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

let calc = function(second = false){
  let out = _.unzip(input).map((n) => String(n.join(""))).slice();
  let i = 0;
  let tmp = "";

  while (out.length > 1){
      tmp = out.reduce((prev, line) => prev + Number(Number(line[i]) === 1), 0) < out.length / 2
          ? "0"
          : "1";

      second && (tmp = tmp.split("").reduce((prev, n) => prev + (n === "1" ? "0" : "1"), ""));

      out = out.filter(line => line[i] === tmp);

      i++;
  }

  return out[0];
};

const lifeSupport = parseInt(calc(), 2) * parseInt(calc(true), 2);

console.log("--- PART 2 ---");
console.log("Life support rating: " + lifeSupport);
