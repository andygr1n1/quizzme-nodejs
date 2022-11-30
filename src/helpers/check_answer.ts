import inquirer from 'inquirer'

export const checkAnswer = async (input: string, answer: string): Promise<boolean> => {
    console.log(`You answered: ${input}.`)
    console.log(`The actual answer is: ${answer}.`)

    const response = await inquirer.prompt([{ message: 'Did you get it right?', name: 'correct', type: 'confirm' }])

    return response.correct
}
