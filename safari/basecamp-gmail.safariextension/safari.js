var imgURL = safari.extension.baseURI + 'icons/icon48.png'

document.addEventListener('keypress', function(event){
  if (event.target.className.match(/editable/)) return;
  var link = document.querySelector('.basecamp-link')
  if (!link || link.style.display === 'none') return
  if (!event.shiftKey || event.keyCode !== 66) return
  safari.self.tab.dispatchMessage('visitBasecampDiscussion', link.href)
})
