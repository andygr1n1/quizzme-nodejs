import inquirer from 'inquirer'

export const inquirerExample = async () => {
    const answers = await inquirer.prompt([
        { type: 'input', name: 'name', message: 'What is your name?' },
        { type: 'input', name: 'live', message: 'Where do you live?' },
        {
            type: 'list',
            name: 'live2',
            message: 'Where do you live?',
            choices: ['NI', 'Wales', 'Scotland', 'England', 'Elsewhere', 'Mauritius'],
        },
    ])

    console.log(`Your name is ${answers.name}.`)
    console.log(`You live in ${answers.live} which is in ${answers.live2}`)
}
