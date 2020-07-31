const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const validate = require('mongoose-validator');
const PORT = 8003;

const app = express();

app.use(flash());
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'admin',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000 }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.set('trust proxy', 1);

mongoose.connect('mongodb://localhost/login_registration'), {useNewUrlParser: true, useUnifiedTopology: true};

let userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter your first name'],
        minlength: 2,
        trim: true
    },
    last_name: {
        type: String,
        required: [true, 'Please enter your last name'],
        minlength: 2,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address'],
        trim: true
    },
    birthday: {
        type: Date,
        required: [true, 'Please enter your birthdate']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: 6,
        trim: true,
        validate: {validator: (value) => {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
        },
        message: 'Password must contain at least 1 number, uppercase letter and a special character!'
    }
}});

let User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    console.log('In the routing');
    res.render('index');
});

app.get('/success', (req, res) => {
    console.log('Successfully created a log-in info');
    User.find({'_id': req.params.id})
        .then(data => {
            res.render('success', {user: data});
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
});

app.post("/register", function(req, res){
    console.log("~Register~", req.body);
    User.create({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, birthday: req.body.birthday, password: req.body.password}, function(err, user){
        if(err){
            console.log("Return an error", err);
            for(var key in err.errors){
                req.flash("form", err.errors[key].message);
            }
            res.redirect("/");
        }
        else{
            console.log("Successfully registered");
            res.redirect("/dashboard");
        }
    })
});

app.post('/login', (req, res) => {
    let User = User.findOne({email: req.body.email}, (err, user) => {
      if (err) {
        res.render('index', {errors: user.errors});
      } else {
        bcrypt.compare(req.body.password, user.password, (err, response) => {
          if (response == true) {
            res.redirect('/success');
          } else {
            res.render('index', {errors: user.errors});
          }
        })
      }
    })
});

app.listen(PORT, () => {
    console.log(`Server Listening On PORT ${PORT}`)
})