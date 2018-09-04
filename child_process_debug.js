const child_process = require('child_process');

exports.fork = function fork(modulePath /* , args, options */) {

    let args = {};
    if(arguments.length > 1)
    {
        args = arguments[1];
    }
    
    return child_process.fork(modulePath, args);
}