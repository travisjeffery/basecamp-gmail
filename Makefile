build:
	@cat \
		base.js \
		safari/basecamp-gmail.safariextension/safari.js \
		> safari/basecamp-gmail.safariextension/script.js
	@cat \
		base.js \
		chrome/src/chrome.js \
		> chrome/src/script.js
	@cat \
		base.css > chrome/src/style.css
	@cat \
		base.css > safari/basecamp-gmail.safariextension//style.css