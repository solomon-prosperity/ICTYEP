const fs = require ('fs')
const content = './newFile.txt'

fs.readFile (content, `UTF-8` , (err, data) => {
    if (err) {
        console.error(err)
        return;
    }

    fs.writeFileSync(`readme.txt`, data);
})