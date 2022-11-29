import fs from 'fs/promises';
// const contents = fs.readFileSync('./quizz.json')
// console.log(JSON.parse(contents.toString()))
// non blocking approach | async
// fs.readFile('./quizz.json', (error, contents) => {
//     if (error) {
//         console.log(error)
//         process.exit(1)
//     }
//     console.log(JSON.parse(contents.toString()))
// })
// promises
try {
    const contents = await fs.readFile('./quizz.json');
    console.log(JSON.parse(contents.toString()));
}
catch (error) {
    console.log(error);
    process.exit(1);
}
//# sourceMappingURL=open.js.map