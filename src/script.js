window.addEventListener('hashchange', function(){
  var links = document.querySelectorAll('[href^="https://basecamp.com/"]')
  if (!links.length) return
    var href = links[0].href
  , a = document.createElement('a')
  a.className = 'basecamp-link T-I J-J5-Ji lS T-I-ax7 ar7'
  a.target = '_blank'
  a.href = href
  a.appendChild(document.createTextNode('Visit this on Basecamp'))
  document.querySelector('.iH > div').appendChild(a)
})

document.addEventListener('keypress', function(event){
  var link
  if (event.target.className.match(/editable/)) return
    if (event.shiftKey && event.keyCode == 66 && (link = document.querySelector('.basecamp-link'))) {
      link.dispatchEvent(new CustomEvent('click', true, true))
    }
})