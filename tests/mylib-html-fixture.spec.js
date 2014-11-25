jasmine.getFixtures().fixturesPath = 'tests/fixtures';

describe('MyLib html test fixture element #mylib', function() {
    var elem;

    beforeEach(function() {
        loadFixtures('mylib-element.html');
        elem = $('#mylib');
    });

    it('has mylib class', function() {
        expect(elem).toHaveClass('mylib');
    });

});
