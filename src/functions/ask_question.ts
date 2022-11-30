import fs from 'node:fs/promises'
import inquirer from 'inquirer'
import type { IQuestion } from '../types.js'
import { checkAnswer } from '../helpers/check_answer.js'
import { getQuizJsonPath } from '../db/get_quizz_json_path.js'

export const askQuestion = async () => {
    const questionsData: Buffer = await fs.readFile(getQuizJsonPath())
    const parsedData: IQuestion[] = JSON.parse(questionsData.toString())

    const target = parsedData[Math.floor(Math.random()) * parsedData.length]

    const { question, answer } = target

    const answers = await inquirer.prompt([{ type: 'input', name: 'useranswer', message: question }])

    target.lastAnsweredCorrect = await checkAnswer(answers.useranswer, answer)
    target.lastAsked = Date().toString()

    const newData = parsedData.filter(item => item.id !== target.id)
    newData.push(target)

    await fs.writeFile(getQuizJsonPath(), JSON.stringify(newData))
}
