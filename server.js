var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get(['/', '/signup', '/signin'], function(req, res) {
    res.render('index', { title: 'Platzigram'})
})

app.get(['/signup'], function(req, res) {
    res.render('index', { title: 'Platzigram | Sign Up'})
})

app.get(['/signin'], function(req, res) {
    res.render('index', { title: 'Platzigram | Sign In'})
})

app.listen(3000, function(err){
    if(err) return console.log('Error'), process.exit(1)
    console.log('Escuchando en el puerto 3000')
})