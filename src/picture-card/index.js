var yo = require('yo-yo')
var translate = require('../translate')
module.exports = function pictureCard(pic){
  var el = render(pic)
  function render(pic) {
    return yo`<div class="card ${pic.liked ? 'liked' : ''}">
      <div class="card-image">
        <img class="activator" src="${pic.url}">
      </div>
      <div class="card-content">
        <a class="card-title" href="/user/${pic.user.username}">
          <img src="${pic.user.avatar}" class="avatar" alt="avatar"/>
          <span class="username">${pic.user.username}</span>
        </a>
        <small class="right time">${translate.date.format(pic.createdAt)}</small>
        <p>
          <a class="left" href="#" onclick="${like.bind(null, true)}"><i class="far fa-heart"></i></a>
          <a class="left" href="#" onclick="${like.bind(null, false)}"><i class="fas fa-heart"></i></a>
          <span class="left likes">${translate.message('likes', {likes: pic.likes})}</span>
        </p>
      </div>
    </div>`
  }
  function like(liked) {
    pic.liked = liked
    pic.likes += liked ? 1 : -1
    var newEl=render(pic);
    yo.update(el, newEl)
    return false
  }
  return el
}