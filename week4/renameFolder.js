const fs = require ('fs')

fs.rename('./rero', `./reross` , err => {
    if (err) {
        console.error (err)
        return;
    }
    console.log ('successful')
})