var page = require('page')
var empty = require('empty-element')
var template = require('./template')

page('/signin', function (ctx, next) {
  document.title = 'Platzigram - Sign In'
  var main = document.getElementById('main-container')
  empty(main).appendChild(template)
})