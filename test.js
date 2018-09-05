let chai = require('chai');
let expect = chai.expect;
let should = chai.should;

let child_process_debug = require('./child_process_debug.js')

describe('child_process_debug', function() {

    it('should fork withouth changing --inspect-brk param', function() {
        let child = child_process_debug.fork('test_child.js');        
        
        if(process.execArgv.some(arg => { return arg.includes("--inspect-brk"); }))
        {
            expect(child.spawnargs.some(arg => { return arg.includes("--inspect-brk"); })).to.be.true;
        }
        else
        {
            expect(child.spawnargs.some(arg => { return arg.includes("--inspect-brk"); })).to.be.false;
        }
        
    });

    it('should fork withouth changing existing param', function() {
        let child = child_process_debug.fork('test_child.js', ['passedParam']);
        
        expect(child.spawnargs.some(arg => { return arg.includes("passedParam"); })).to.be.true;
    });

    it('should fork withouth changing existing params', function() {
        let child = child_process_debug.fork('test_child.js', ['passedParam', 'secondParamPassed']);
        
        expect(child.spawnargs.some(arg => { return arg.includes("passedParam"); })).to.be.true;
        expect(child.spawnargs.some(arg => { return arg.includes("secondParamPassed"); })).to.be.true;
    });

    it('should fork with a different inspect port', function() {
        let child = child_process_debug.fork('test_child.js', ['passedParam', 'secondParamPassed']);
        
        let inspectPort = process.debugPort;

        const extractPort = (param ) => { return parseInt(param.substring(param.indexOf('=')+1, param.length)); };
        let inspectPortChild = extractPort(child.spawnargs.find(arg => { return arg.includes("--inspect-brk"); }));

        expect(inspectPortChild).to.be.not.eql(inspectPort);
    });
});