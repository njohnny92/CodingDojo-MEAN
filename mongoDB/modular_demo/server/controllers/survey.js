import { model } from "mongoose";
let mongoose = require('mongoose');
let survey = mongoose.model('Survey');

module.exports = {

    index: function(req,res){
        res.render('index');
    },

    create: function(req,res){
        console.log(req.body);
        let newSurvey = {
            name: req.body.name,
            lang: req.body.lang,
            dojo: req.body.dojo
        };
        console.log(req.body);
        Survey.create(newSurvey)
            .then(data => {
                res.redirect('results');
            })
            .catch(err => {
                console.log(err);
                res.redirect('results');
            })
    },

    results: function(req,res){
        Survey.find()
            .then(surveys => {
                res.render('results', {surveys: surveys})
            })
            .catch(err => {
                console.log(err);
                res.redirect('/')
            })
    }

};