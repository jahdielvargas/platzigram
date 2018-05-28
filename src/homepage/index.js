var page = require('page')
var empty = require('empty-element')
var template = require('./template')

page('/', function (ctx, next) {
  document.title = 'Platzigram'
  var main = document.getElementById('main-container')
  var pictures = [
    {
      user: {
        username: 'vargas',
        avatar: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/17190415_1876755205936165_4415297318093384407_n.jpg?_nc_cat=0&oh=6aea4e9447d9c95c359290ad32eb8ddc&oe=5B77E576'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date()
    },
    {
      user: {
        username: 'jahdiel',
        avatar: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/17190415_1876755205936165_4415297318093384407_n.jpg?_nc_cat=0&oh=6aea4e9447d9c95c359290ad32eb8ddc&oe=5B77E576'
      },
      url: 'office.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date(2018, 4, 22)
    }
  ]
  empty(main).appendChild(template(pictures))
})
