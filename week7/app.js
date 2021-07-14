const express = require('express');
const app = express();

const friend = require('./routes/friendsRoute')

app.use(express.json())
app.use('/api/friends' , friend);
app.use('/api/friends/:id', friend)



app.listen(8080,() => {
    console.log(`Server is listening on port 8080`)
})