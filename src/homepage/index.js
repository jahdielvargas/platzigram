var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var request = require('superagent')
var header = require('../header')
var axios = require('axios')

page('/', header, loadPictures, function (ctx, next) {
  document.title = 'Platzigram'
  var main = document.getElementById('main-container')
  empty(main).appendChild(template(ctx.pictures))
})

function loadPictures(ctx, next) {
  fetch('/api/pictures')
    .then(function(res){
      return res.json()
    })
    .then(function (pictures){
      ctx.pictures = pictures
      next()
      console.log('fecth')
    })
    .catch(function (err){
      console.log(err)
    })
}