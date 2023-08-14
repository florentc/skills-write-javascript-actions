const getJoke = require("./joke");
const setOutput = require("@actions/core");

async function run() {
  const joke = await getJoke();
  console.log(joke);
  setOutput("joke-output", joke);
}

run();
