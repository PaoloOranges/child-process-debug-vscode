let chai = require('chai');
let expect = chai.expect;
let should = chai.should;

let child_process_debug = require('./child_process_debug.js')

describe('child_process_debug', function() {

    it('should fork withouth changing existing params', function() {
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
});