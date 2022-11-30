- initialize a nodejs project
npm init -y
-----------------------------
# CommonJS or CJS
const http = require('http')
module.exports = {name: 'quizzme'}

# ECMAScript Modules or ESM
import http from 'http'
export const name = 'quizzme'
-----------------------------
https://www.npmjs.com/package/inquirer
-----------------------------
CREATING SHEBANG
windows: node
osx: /usr/bin/env node
linux: /usr/bin/node
-----------------------------
CREATE A SYM-LINK
sudo ln -s /home/andygr1n1/projects/quizzme-nodejs/build/src/index.js /usr/local/bin/quizme
-----------------------------