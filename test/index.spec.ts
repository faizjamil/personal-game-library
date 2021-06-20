// mocha + chai testing
// i am not supposed to import mocha as a module
import {expect, should} from 'chai'
import {testFunction} from './test'
describe('test function', () =>  {
    it('should return "I can write a test"', () =>{
            expect(testFunction()).to.equal('I can write a test')
    })
});