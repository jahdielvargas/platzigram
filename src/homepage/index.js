var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var request = require('superagent')
var header = require('../header')
var axios = require('axios')
var loading = require('../loading')


page('/', header, loading, asyncLoad, function (ctx, next) {
  document.title = 'Platzigram'
  var main = document.getElementById('main-container')
  empty(main).appendChild(template(ctx.pictures))
})

async function asyncLoad(ctx, next) {
  try {
    ctx.pictures = await fetch('/api/pictures').then(res => res.json())
    next()
  } catch (err) {
    return console.log(err)
  }
}