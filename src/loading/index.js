module.exports = function (ctx, next) {
  var el = document.createElement('div')
  el.classList.add('loader')
  document.getElementById('main-container').appendChild(el)
  next()
}