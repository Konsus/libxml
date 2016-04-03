if(process.platform == 'win32')
	module.exports = require('xmljswin');
else
	module.exports = require('bindings')('xmljs');
