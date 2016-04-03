if(process.env.use_precompiled)
	module.exports = require('xmljswin');
else
	module.exports = require('bindings')('xmljs');
