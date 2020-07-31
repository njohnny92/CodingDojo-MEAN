let survey = require('./../controllers/survey');

module.exports = function(app){

    app.get('/', survey.index);
    app.get('/results', survey.results);
    app.post('/submit', survey.create);

}