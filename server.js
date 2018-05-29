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

app.get('/api/pictures', function (req, res){
    var pictures = [
        {
            user: {
            username: 'vargas',
            avatar: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/17190415_1876755205936165_4415297318093384407_n.jpg?_nc_cat=0&oh=6aea4e9447d9c95c359290ad32eb8ddc&oe=5B77E576'
            },
            url: 'office.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date().getTime()
        },
        {
            user: {
            username: 'jahdiel',
            avatar: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/17190415_1876755205936165_4415297318093384407_n.jpg?_nc_cat=0&oh=6aea4e9447d9c95c359290ad32eb8ddc&oe=5B77E576'
            },
            url: 'office.jpg',
            likes: 1,
            liked: true,
            createdAt: new Date(2018, 4, 22).getTime()
        }
        ]
    setTimeout( function () {
        res.send(pictures)
    }, 2000)
})

app.listen(3000, function(err){
    if(err) return console.log('Error'), process.exit(1)
    console.log('Escuchando en el puerto 3000')
})