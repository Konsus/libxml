var exec = require('child_process').exec;
if(!process.env.use_precompiled)
    exec('node-gyp rebuild', function(error, stdout, stderr) {
        // command output is in stdout
	console.log(stdout);
    });
