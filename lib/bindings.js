if(process.env.use_precompiled){
	module.exports = require('./xmljswin.node');
}else
	module.exports = require('bindings')('xmljs');
