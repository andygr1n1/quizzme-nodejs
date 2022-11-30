import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const getQuizJsonPath = (): string => {
    let dataPath = ''

    const __dirname = dirname(fileURLToPath(import.meta.url))

    dataPath = join(__dirname, 'quizz.json')

    console.log('dataPath', dataPath)

    return dataPath
}
