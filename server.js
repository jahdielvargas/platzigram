var express = require('express')
var multer  = require('multer')
var ext = require('file-extension')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, +Date.now() + '.'+ ext(file.originalname))
    }
  })
   
var upload = multer({ storage: storage }).single('picture')

var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get(['/'], function(req, res) {
    res.render('index')
})

app.get(['/signup'], function(req, res) {
    res.render('index')
})

app.get(['/signin'], function(req, res) {
    res.render('index')
})

app.get('/api/pictures', function (req, res){
    const pictures = [
        {
            user: {
            username: 'vargas',
            avatar: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/17190415_1876755205936165_4415297318093384407_n.jpg?_nc_cat=0&oh=6aea4e9447d9c95c359290ad32eb8ddc&oe=5B77E576'
            },
            url: 'office.jpg',
            likes: 0,
            liked: false,
            createdAt: +new Date()
        },
        {
            user: {
            username: 'jahdiel',
            avatar: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/17190415_1876755205936165_4415297318093384407_n.jpg?_nc_cat=0&oh=6aea4e9447d9c95c359290ad32eb8ddc&oe=5B77E576'
            },
            url: 'office.jpg',
            likes: 1,
            liked: true,
            createdAt: +new Date(2018, 4, 22)
        }
        ]
    res.send(pictures)
})

app.post('/api/pictures', function (req, res) {
    upload(req, res, function (err){
        if (err) {
            return res.send(500, 'Error Uploading File :(')
        }
        res.send('File Uploaded :)')
    })
})

app.get('/api/user/:username', (req, res) => {
    const user = {
      username: 'platzi',
      avatar: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/17190415_1876755205936165_4415297318093384407_n.jpg?_nc_cat=0&oh=9859194a8847be28b58dbfaee37460d7&oe=5B807A4D',
      pictures: [
        {
          id: 1,
          src: 'https://images.pexels.com/photos/566888/pexels-photo-566888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          likes: 3
        },
        {
          id: 2,
          src: 'https://images.pexels.com/photos/1128240/pexels-photo-1128240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          likes: 1
        },
        {
          id: 3,
          src: 'https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          likes: 10
        },
        {
          id: 4,
          src: 'https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          likes: 0
        },
        {
          id: 5,
          src: 'https://images.pexels.com/photos/121627/pexels-photo-121627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          likes: 23
        },
        {
          id: 6,
          src: 'https://images.pexels.com/photos/967016/pexels-photo-967016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          likes: 11
        }
      ]
    }
    res.send(user);
})  

app.get('/:username', function (req, res) {
    res.render('index', { title: `Platzigram - ${req.params.username}` })
})  

app.get('/:username/:id', function (req, res) {
    res.render('index', { title: `Platzigram - ${req.params.username}` })
})

app.listen(3000, function(err){
    if(err) return console.log('Error'), process.exit(1)
    console.log('Escuchando en el puerto 3000')
})