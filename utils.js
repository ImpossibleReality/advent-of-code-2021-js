import readline from "readline";

function question(query) {
  console.log("Enter puzzle input (press ctrl+D to finish):");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    let input = [];
    rl.on("line", (l) => {
      input.push(l);
    });
    rl.on("close", () => {
      resolve(input);
    });
  });
}

export async function getInput() {
  const res = await question("Challenge input: ");
  return res;
}
