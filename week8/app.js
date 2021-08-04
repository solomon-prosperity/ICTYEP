const express = require('express');
const app = express()
const userRoute = require('./routes/userRoutes')
const dotenv = require('dotenv')
dotenv.config({ path: "./config.env"})

const port = process.env.PORT
const db = require('./db');
const { urlencoded } = require('express');

db()
app.use (express.urlencoded({extended: false}))
// app.use(express.json())

app.use('/users' , userRoute)

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})