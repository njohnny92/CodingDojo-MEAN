const express = require("express");
const session = require("express-session");
const app = express();

app.use(session({
    secret: 'admin',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// the '/' is the route of the URL example localhost:8000/ or localhost8000 renders the page for the URL
//the 'index' is the index.ejs within the views folder.
//the {counter: req.session.counter} is the function from (req,res) where 'index' is the request file for the views, and
//{counter:req.session.counter} is the response of the output.
app.get("/", (req, res) => {
    if(req.session.counter == null){
        req.session.counter = 0;
    }
    else {
        req.session.counter += 1;
    }
    res.render("index", {counter : req.session.counter});
})

app.get("/plus", (req, res) => {
    req.session.counter += 1;
    console.log(req.body);
    res.redirect("/");
})

app.get("/reset", (req, res) => {
    req.session.counter = null;
    res.redirect("/");
})

app.listen(8000, () => {
    console.log("Listening on port: 8000");
})