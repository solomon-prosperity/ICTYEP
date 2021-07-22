const mongoose = require('mongoose');
async function dbConnect () {
    try {
        await mongoose.connect(process.env.DB, 
            {useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log(`Connected to database`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect