build:
	@cat \
		base.js \
		safari/basecamp-gmail.safariextension/safari.js \
		> safari/basecamp-gmail.safariextension/script.js
	@cat \
		base.js \
		chrome/src/chrome.js \
		> chrome/src/script.js