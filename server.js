const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const articlesRouter = require("./Routes/article");
const Article = require("./Models/article");
const methodOverride = require("method-override");
const app = express();



app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });

  res.render("articles/index", { articles: articles });
});

//pour tt les routes sous /articles
app.use("/articles", articlesRouter);

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log(`db connected successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT;
app.listen(port, console.log(`app conneted at port ${port}`));
