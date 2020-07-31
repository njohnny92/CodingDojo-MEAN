let mongoose = require('mongoose');

let surveySchema = new mongoose.Schema({
    name: String,
    lang: String,
    dojo: String
}, {timestamps: true, collection: 'surveys'});

//let mongoose Survey = mongoose.model('Survey', surveySchema); dont need to save this is a variabel, look at line 11.

mongoose.model('Survey', surveySchema); //this line of code is a getter and a setter, doesn't need to be instantiated.
//once you set it, you can get it from a different file.