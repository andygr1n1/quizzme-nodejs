import readline, { Interface } from 'node:readline/promises'

interface RLInterface extends Interface {
    input: typeof process.stdin
}

const rl: RLInterface = readline.createInterface({
    terminal: true,
    input: process.stdin,
    output: process.stdin,
}) as RLInterface

const answer = await rl.question('What is your name?')

console.log(`Your name is ${answer}`)
rl.close()

// console.log("What is your name?");

// let input = "";

// rl.input.on("keypress", (event, rl) => {
//     console.log(event, rl)
//   if (rl.name === "return") {
//     console.log(`Your name is ${input}.`);
//     console.log("Where do you live?");
//   } else {
//     input += event;
//   }
// });
