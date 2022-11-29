import { addQuestion } from './functions/add_question.js'
import { askQuestion } from './functions/ask_question.js'
import { getFlags } from './helpers/getFlags.js'

// console.log(process.argv)
const flags = getFlags()

if (flags.includes('a') || flags.includes('add')) {
    addQuestion()
} else {
    askQuestion()
}
