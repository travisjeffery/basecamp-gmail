build:
	@cat \
		top.js \
		base.js \
		safari/basecamp-gmail.safariextension/safari.js \
		bottom.js \
		> safari/basecamp-gmail.safariextension/script.js
	@cat \
		top.js \
		base.js \
		chrome/src/chrome.js \
		bottom.js \
		> chrome/src/script.js
	@cat \
		base.css > chrome/src/style.css
	@cat \
		base.css > safari/basecamp-gmail.safariextension//style.css