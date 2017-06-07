// @flow weak
var numberOfDiscIntersections = require('./numberOfDiscIntersections');
var assert = require('assert');

describe('Codility lesson 6: number of disc insertions', function() {
    it('Example input should produce example output', function() {
        var input = [];
        input[0] = 1;
        input[1] = 5;
        input[2] = 2;
        input[3] = 1;
        input[4] = 4;
        input[5] = 0;

        assert.equal(numberOfDiscIntersections(input), 11);
    });
});
