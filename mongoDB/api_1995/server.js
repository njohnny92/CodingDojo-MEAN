const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8002;

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "static")));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/first_api', {useNewUrlParser: true, useUnifiedTopology: true});

let UserSchema = new mongoose.Schema({
  name: {type: String},
}, {timestamps: true})

mongoose.model('User', UserSchema);

let User = mongoose.model('User');

app.get('/', (req, res) => {
  let users = User.find({}, (err, users) => {
    if (err) {
      res.json({message: 'Error', error: err});
    } else {
      res.json({message: 'Success', data: users});
    }
  })
})

app.get('/new/:name', (req, res) => {
  let user = new User({name: req.params.name});

  user.save( (err) => {
    if (err) {
      res.json({message: 'Error', error: err});
    } else {
      res.redirect('/');
    }
  })
})

app.get('/remove/:name', (req, res) => {
  User.deleteOne({name: req.params.name}, (err) => {
    if (err) {
      res.json({message: 'Error', error: err});
    } else {
      res.redirect('/');
    }
  })
})

app.get('/:name', (req, res) => {
  let user = User.find({name: req.params.name}, (err, user) => {
    if (err) {
      res.json({message: 'Error', error: err});
    } else {
      res.json({message: 'Success', data: user})
    }
  })
})

app.listen(PORT, function() {
    console.log(`Server Listening on PORT ${PORT}`);
});