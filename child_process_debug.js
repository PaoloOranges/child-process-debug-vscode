const child_process = require('child_process');

exports.fork = function fork(modulePath /* , args, options */) {

    let args = {};
    if(arguments.length > 1)
    {
        const inspectParamIndex = process.execArgv.findIndex(arg => { return arg.includes("--inspect-brk"); });
        if(inspectParamIndex != -1)
        {
            const newDebugPort = process.debugPort + 1;
            process.execArgv[inspectParamIndex] = process.execArgv[inspectParamIndex].replace(/(--inspect-brk=)(\d*)/, "$1" + newDebugPort);
        }

        args = arguments[1];
    }    
    
    return child_process.fork(modulePath, args);
}