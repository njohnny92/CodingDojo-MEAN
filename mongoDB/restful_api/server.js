const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8005;

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "static")));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/restful', {useNewUrlParser: true, useUnifiedTopology: true});

let TaskSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, default: ''},
  completed: {type: Boolean, default: false}
}, {timestamps: true})

mongoose.model('Task', TaskSchema);

let Task = mongoose.model('Task');

app.get('/', (req, res) => {
  let tasks = Task.find({}, (err, tasks) => {
    if (err) {
      res.json({message: 'Error', error: err});
    } else {
      res.json({message: 'Success', data: tasks});
    }
  })
})

app.get('/:id', (req, res) => {
  let task = Task.findOne({_id: req.params.id}, (err, task) => {
    if (err) {
      res.json({message: 'Error', error: err});
    } else {
      res.json({message: 'Success', data: task});
    }
  })
})

app.post('/:title', (req, res) => {
  let task = new Task({title: req.params.title});
  task.save((err) => {
    if (err) {
      res.json({message: 'Error', error: err});
    } else {
      res.json({message: 'Success', data: task});
    }
  })
})

app.put('/:id/:title/:description/:completed', (req, res) => {
  let task = Task.findOne({_id: req.params.id}, (err, task) => {
    if (err) {
      res.json({message: 'Error', error: err});
    } else {
      task.title = req.params.title;
      task.description = req.params.description;
      task.completed = req.params.completed;
      task.save( (err) => {
        if (err) {
          res.json({message: 'Error', error: err});
        } else {
          res.json({message: 'Success', data: task});
        }
      })
    }
  })
})

app.delete('/:id', (req, res) => {
  Task.remove({_id: req.params.id}, (err) => {
    if (err) {
      res.json({message: 'Error', error: err});
    } else {
      res.redirect('/');
    }
  })
});

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
});