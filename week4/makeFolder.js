const fs = require ('fs')

const rero = `deleteMe`

try {
if (!fs.existsSync ('deleteMe')) {
    fs.mkdirSync('deleteMe')
}
}
 catch (err){

  console.error(err)

 }