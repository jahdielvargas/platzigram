var yo = require('yo-yo')
var translate = require('../translate')

var el = yo`<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-align">
        <a class="dropdown-button btn-flat" href="#" data-activates='dropdown2'>${translate.message('language')}</a>
        <ul id='dropdown2' class='dropdown-content'>
          <li><a href="#!" onclick=${lang.bind(null ,'es')} >${translate.message('spanish')}</a></li>
          <li><a href="#!" onclick=${lang.bind(null ,'en-US')} >${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l6 center-align">
        <p>® 2018 Platzigram</p>
      </div>
    </div>
  </div>
</footer>`

function lang(locale){
  if(locale != localStorage.locale)  {
    localStorage.locale = locale
    location.reload()
  }
  return false
}

document.getElementById('footer-container').appendChild(el)