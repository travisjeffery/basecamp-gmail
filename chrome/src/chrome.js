document.addEventListener('keypress', function(event){
  if (event.target.className.match(/editable/)) return;
  var link = document.querySelector('.basecamp-link')
  if (!link || link.style.display === 'none') return;
  if (event.shiftKey && event.keyCode == 66) link.dispatchEvent(new CustomEvent('click', true, true))
})
