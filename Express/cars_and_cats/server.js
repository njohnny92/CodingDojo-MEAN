const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));


app.listen(8000, function() {
    console.log("listening on port 8000");
})
