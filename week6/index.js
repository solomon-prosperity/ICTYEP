const express = require('express')
const app = express();
const path = require('path')

app.get('/' ,  (req , res) => {
        res.sendFile(path.join(__dirname , "index.html"))
}) 

app.get('*' , (req , res) => {
    res.send(`404 page not found`)
})

app.listen (5000, () => {
    console.log(`server is running on port 5000`)
});