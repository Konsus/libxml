if(process.env.use_precompiled){
	module.exports = require('./../win/xmljs.node');
}else
	module.exports = require('bindings')('xmljs');
