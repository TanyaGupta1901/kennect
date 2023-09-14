const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const commentRoute = require('./routes/comments');
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/kennect_assignment", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(userRoute);
app.use(postRoute);
app.use(commentRoute);

app.get("/", (req, res) => {
    return res.send("we are live");
})

app.listen(5500, () => {
    console.log("listening at 5500");
})