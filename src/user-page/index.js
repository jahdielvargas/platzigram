import page from 'page'
var header = require('../header')
import empty from 'empty-element'
import template from './template'

page('/:username', loadUser, header, function (ctx, next){
  document.title = `Platzigram - ${ctx.params.username}`
  var main = document.getElementById('main-container')
  empty(main).appendChild(template(ctx.user))
  $(document).ready(function(){$('.modal').modal()})
})

async function loadUser (ctx, next) {
  try {
    ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json())
    console.log(ctx.user)
    next()
  } catch (err) {
    console.log(err)
  }
}