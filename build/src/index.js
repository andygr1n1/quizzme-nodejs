import inquirer from 'inquirer';
import { readFromJSON } from './open.js';
const flags = [];
process.argv.forEach(arg => {
    if (/^-/.test(arg)) {
        flags.push(arg.replaceAll('-', ''));
    }
});
console.log(flags);
if (flags.includes('a') || flags.includes('add')) {
    // addQuestion()
    console.log('add question');
}
else {
    askQuestion();
}
// console.log(process.argv)
async function askQuestion() {
    const answers = await inquirer.prompt([
        { type: 'input', name: 'name', message: 'What is your name?' },
        { type: 'input', name: 'live', message: 'Where do you live?' },
        {
            type: 'list',
            name: 'live2',
            message: 'Where do you live?',
            choices: ['NI', 'Wales', 'Scotland', 'England', 'Elsewhere', 'Mauritius'],
        },
    ]);
    console.log(`Your name is ${answers.name}.`);
    console.log(`You live in ${answers.live} which is in ${answers.live2}`);
    readFromJSON();
}
//# sourceMappingURL=index.js.map