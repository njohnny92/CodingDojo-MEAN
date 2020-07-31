const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');
const PORT = 8001;

const app = express();

app.set('view engine', 'ejs');
app.set(path.join('views', './views'));

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './static')));

mongoose.connect('mongodb://localhost/message_board', {useNewUrlParser: true, useUnifiedTopology: true});

let messageSchema = new Schema({
    name: String,
    message: String,
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

let commentSchema = new Schema({
    name: String,
    comment: String,
    _message: {type: Schema.Types.ObjectId, ref: 'Message' }
})

let Message = mongoose.model('Message', messageSchema);
let Comment = mongoose.model('Comment', commentSchema);

app.get('/', (req, res)=>{
    Message.find({}).populate('_comments').exec()
        .then((data)=>{
            console.log(data);
            res.render('index', {messages: data});

        })
        .catch((err)=>{
            res.render('index', {messages: err})
        })
})

app.post('/message', (req, res)=>{
    console.log(req.body);
    Message.create({name: req.body.name, message: req.body.message})
        .then((data)=>{
            console.log("success", data);
            res.redirect('/');
        })
        .catch((err)=>{
            console.log("failure", err);
            res.redirect('/');
        })
});

app.post('/comment/:id', (req, res)=>{
    Message.findOne({_id: req.params.id})
        .then((message)=>{
            let newComment = new Comment(req.body);
            newComment._message = message._id;
            message._comments.push(newComment);
            message.save()
                .then((data)=>{
                    newComment.save()
                        .then((data)=>{
                            res.redirect('/');
                        })
                        .catch((err)=>{
                            console.log(err);
                            res.redirect('/')
                        })
                })
                .catch((err)=>{
                    console.log(err);
                    res.redirect('/')
                })
        })
        .catch((err)=>{
            console.log(err);
            res.redirect('/');
        })
})



app.listen(PORT, function(){
    console.log(`Server Listening on PORT ${PORT}`)
})