var interval = setInterval(function() {
  if (!document.querySelectorAll('.nH').length) return;
  clearInterval(interval)
  window.addEventListener('hashchange', function(){
    var links = document.querySelectorAll('[href^="https://basecamp.com/"]')
    if (!links.length) return
    var href = links[0].href
    , a = document.createElement('a')
    a.className = 'basecamp-link T-I J-J5-Ji lS T-I-ax7 ar7'
    a.target = '_blank'
    a.href = href
    a.appendChild(document.createTextNode('Visit this on Basecamp'))
    window.idled = true
    document.querySelector('.iH > div').appendChild(a)
  })
}, 100)