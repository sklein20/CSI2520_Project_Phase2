const express = require("express");
const ejs = require("ejs");

//create express app
const app = new express();

//Initialize Body Parser Middleware to Parse Data Sent By Users
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initialize EJS Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//Begin Server Logic
//Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/books", (req, res) => {
    res.render("./html/books");
});

app.get("/games", (req, res) => {
    res.render("./html/games");
});

app.get("/login", (req, res) => {
    res.render("./html/login");
});

app.get("/movies", (req, res) => {
    res.render("./html/movies");
});

app.get("/music", (req, res) => {
    res.render("./html/music");
});

app.get("/tvShows", (req, res) => {
    res.render("./html/tvShows");
});
//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server Started on Port No. ${PORT}`);});