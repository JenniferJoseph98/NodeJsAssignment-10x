const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("please enter your name  :", (username) => {
  console.log(`Hello ${username}`);
  rl.close();
});
