const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req,res) => {
    res.render('index', {title: 'my root route'});
});

app.post('/user_registration', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/users', (req, res) => {
    var users_array = [
        {name: 'Michale', email: 'michael@michael.com'},
        {name: 'Jay', email: 'Jay@jay.com'},
        {name: 'Joe', email: 'Joe@joe.com'},
        {name: 'James', email: 'James@james.com'}
    ]
    res.render('users', {users: users_array});
});

app.get('/users/:id', (req,res) => {
    const {id} = req.params;
    console.log(req.params.id);
    res.render('user_param', {user_param: user })
});

app.listen(8000, () =>
    console.log('listening on port 8000')
);