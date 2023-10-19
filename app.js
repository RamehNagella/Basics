const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./router/feed");

const app = express();

app.use(bodyParser.json()); // to read the data and append to incoming request
// app.use(); //> to handle any method
//but we can make a route folder to seperate the routes

//forward the incoming requests
//GET/feed/posts
app.use("/feed", feedRoutes);
//path is localhost:3000/feed/path(defined in the routes)

app.listen(3000);
