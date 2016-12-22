requirejs({
	"baseUrl": "./js/",
	"noGlobal": true,
	"paths": {
		"logging": "../../bower_components/logging.js/logging"
	},
	"shim": {
	},
	"include": [
		'app',
		'jquery.js',
		'what-input.js',
		'foundation.js',
		'foundation.min.js'
	]
})