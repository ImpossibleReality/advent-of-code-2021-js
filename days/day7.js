import { getInput } from "../utils.js";
import _ from "lodash";

function takeMedian(values){
    if(values.length ===0) throw new Error("No inputs");
  
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
    
    if (values.length % 2)
      return values[half];
    
    return (values[half - 1] + values[half]) / 2.0;
  }

let input = await getInput();

let crabs = input[0].split(",").map((n) => parseInt(n))

let median = takeMedian(crabs)

let fuelNeeded = 0

crabs.forEach((c) => {
    fuelNeeded += Math.abs(c - median)
})

console.log("--- PART 1 ---\nFuel Needed: " + fuelNeeded)

function dist(c) {
    return c*(c-1)/2 + c
}

let fuels = []
for (let i = 0; i < 2000; i++) {
    let fuel = 0

    crabs.forEach((c) => {
        fuel += dist(Math.abs(c - i))
    })

    fuels.push(fuel)
}

console.log("--- PART 2 ---\nFuel Needed: " + _.min(fuels))