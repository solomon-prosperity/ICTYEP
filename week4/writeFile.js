// Writing Files in node (Asynchronous method)

// const fs = require ('fs')

// const content = `Prosper Eravwuvieke`

// fs.writeFile('./week4.txt' , content , err => {
// if (err) {
//     console.log (err)
//     return;
// }
// console.log (`File Successfully Written`);

// })

// Synchronous method

const fs = require ('fs')

const content = `Prosper Eravwuvieke`

try {
const data = fs.writeFileSync('./rero/newFile.txt' , content )
}
catch (err) {
    console.log (err)
}


