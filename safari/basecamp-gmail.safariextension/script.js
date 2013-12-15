+function() {
  var createOrUpdateLink = function () {
    var link = document.querySelector('.basecamp-link')
    var title =  document.querySelector('span.hP')
    if (title && link && title.textContent.match(/Daily Recap/)) link.style.display = 'none'
    else {
      var links = document.querySelectorAll('[href^="https://basecamp.com/"]')
      if (!links.length) return;
      var href = links[0].href
      if (!link) {
        link = document.createElement('a')
        link.className = 'basecamp-link T-I J-J5-Ji lS T-I-ax7 ar7'
        link.target = '_blank'
        link.href = href
        link.innerHTML = 'Visit this on Basecamp <img src="https://basecamp.com/assets/products/basecamp-a448afb67290235f35b3ec31303b2b27.png" />'
        document.querySelector('.iH > div').appendChild(link)
      }
      link.style.display = ''
      link.href = href
    }
  }

  window.addEventListener('hashchange', createOrUpdateLink)
  window.addEventListener('DOMFocusIn', createOrUpdateLink)
}()
document.addEventListener('keypress', function(event){
  if (event.target.className.match(/editable/)) return;
  var link = document.querySelector('.basecamp-link')
  if (!link || link.style.display === 'none') return
  if (!event.shiftKey || event.keyCode !== 66) return
  safari.self.tab.dispatchMessage('visitBasecampDiscussion', link.href)
})
