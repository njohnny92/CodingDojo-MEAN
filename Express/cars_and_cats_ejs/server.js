const express = require("express");
const app = express();

app.use(express.static(__dirname + '/static'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    res.render('users', {users: users_array});
})


app.listen(8000, function() {
    console.log("listening on port 8000")
});