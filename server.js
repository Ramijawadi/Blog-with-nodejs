const express = require('express')
require('dotenv').config()

const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('index')
})


const port = process.env.PORT
app.listen(port, console.log(`app conneted at port ${port}`))