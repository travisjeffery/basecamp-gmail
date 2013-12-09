window.addEventListener('hashchange', function(){
  var link = document.querySelector('.basecamp-link')
  , title = document.querySelector('span.hP');
  if (title && title.textContent.match(/Daily Recap/)) {
    if (!link) return;
    link.style.display = 'none'
  }
  else {
    var links = document.querySelectorAll('[href^="https://basecamp.com/"]')
    if (!links.length) return;
    var href = links[0].href
    if (!link) {
      link = document.createElement('a')
      link.className = 'basecamp-link T-I J-J5-Ji lS T-I-ax7 ar7'
      link.target = '_blank'
      link.href = href
      link.appendChild(document.createTextNode('Visit this on Basecamp'))
      document.querySelector('.iH > div').appendChild(link)
    }
    link.style.display = ''
    link.href = href
  }
})

document.addEventListener('keypress', function(event){
  if (event.target.className.match(/editable/)) return;
  var link = document.querySelector('.basecamp-link')
  if (!link || link.style.display === 'none') return
  if (event.shiftKey && event.keyCode == 66)
    safari.self.tab.dispatchMessage('visitBasecampDiscussion', link.href)
})
