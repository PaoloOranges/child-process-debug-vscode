const child_process = require('child_process');

exports.fork = function fork(modulePath /* , args, options */) {
    return child_process.fork(modulePath);
}