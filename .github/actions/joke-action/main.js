const getJoke = request("./joke");
const setOutput = request("@actions/core");

async function run() {
  const joke = await getJoke();
  console.log(joke);
  setOutput("joke-output", joke);
}

run();
