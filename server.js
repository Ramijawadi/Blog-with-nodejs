const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const articlesRouter = require('./Routes/article')
const app = express()




app.use(express.urlencoded({ extended: false }))


app.set('view engine', 'ejs')
app.get('/', (req, res) => {

    const articles = [{

        title: 'test title of the articles',
        createdAt: new Date(),
        description: 'test description of the articles'
    },

    {

        title: 'test title of the articles 2',
        createdAt: new Date(),
        description: 'test description of the articles 2'
    },

    ]

    res.render('articles/index', { articles: articles })
})

app.use('/articles', articlesRouter);



const uri = process.env.MONGO_URI;
mongoose
    .connect(uri)

    .then(() => {
        console.log(`db connected successfully`);
   
    })
    .catch((err) => {
        console.log(err);
    });

const port = process.env.PORT
app.listen(port, console.log(`app conneted at port ${port}`))