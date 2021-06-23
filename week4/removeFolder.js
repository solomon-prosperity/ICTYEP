const fs = require (`fs`)

dir = './deleteMe'

fs.rmdir (dir, { recursive: true}, (err) => {
    if (err) {
        throw err;
    }
})


