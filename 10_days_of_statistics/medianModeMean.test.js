// @flow weak
var day0MedianModeMeanSolution = require('./medianModeMean');
var assert = require('assert');

describe('10 Days of Statistics', function() {
    describe('Day 0: Mean, Median, and Mode', function() {
        it('Example input should produce example output', function() {
            var input = "10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060";
            var expectedOutput = "43900.6\n44627.5\n4978";

            assert.equal(day0MedianModeMeanSolution(input), expectedOutput);
        });
    });
});
