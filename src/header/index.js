var yo = require('yo-yo')
var translate = require('../translate')
var empty = require('empty-element')

var el = yo`<nav class="header">
<div class="nav-wrapper">
  <div class="container">
    <div class="row">
      <div class="col s2 m6">
        <a href="/" class="brand-logo platzigram">Platzigram</a>
      </div>
      <div class="col s2 offset-s9 m6 offset-m6 right-align">
        <a class="dropdown-button btn-flat" href="#"  data-activates='dropdown1'>
          <i class="fas fa-user" aria-hidden="true"></i>
        </a>
        <ul id='dropdown1' class='dropdown-content'>
          <li><a href="#!">${translate.message('logout')}</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</nav>`

module.exports = function (ctx, next) {
  var container = document.getElementById('header-container')
  empty(container).appendChild(el)
  $('.dropdown-button').dropdown()
  next()
}