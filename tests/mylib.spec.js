"use strict";
describe('MyLib', function() {
    var testName = 'asdf',
    obj;

    beforeEach(function() {
        // This is run before each test
        obj = new MyLib(testName);
    });

    it('has name set in constructor', function() {
        expect(obj.name).toEqual(testName);
    });

});
