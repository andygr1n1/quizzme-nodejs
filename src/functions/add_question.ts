import fs from 'node:fs/promises'
import inquirer from 'inquirer'
import _ from 'lodash'

import type { IQuestion } from '../types.js'
import { getNewId } from '../helpers/getNewId.js'
import { getQuizJsonPath } from '../db/get_quizz_json_path.js'

export const addQuestion = async () => {
    console.log('🍀 Add question:')
    const addQuestionData = await inquirer.prompt([
        { type: 'input', name: 'question', message: 'Enter the question:' },
        { type: 'input', name: 'answer', message: 'Enter the answer:' },
    ])

    console.log(`The question is: ${addQuestionData.question}`)
    console.log(`The answer is: ${addQuestionData.answer}`)

    const questionsData: Buffer = await fs.readFile(getQuizJsonPath())
    const parsedData: IQuestion[] = JSON.parse(questionsData.toString())

    const lastQuestion = _.last(parsedData)

    if (!lastQuestion) throw new Error('data is broken')

    const newData: IQuestion = {
        id: getNewId(parsedData.map(data => data.id)),
        question: addQuestionData.question as string,
        answer: addQuestionData.answer as string,
        lastAnsweredCorrect: false,
        lastAsked: new Date().toString(),
    }

    parsedData.push(newData)

    // await fs.writeFile('./src/db/quizz.json', JSON.stringify(parsedData))
    await fs.writeFile(getQuizJsonPath(), JSON.stringify(parsedData))
}
