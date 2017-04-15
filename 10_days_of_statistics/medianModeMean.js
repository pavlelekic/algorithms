// @flow weak

module.exports = function solution(input) {
    var lengthAndValues = input.split("\n");
    //var length = parseInt(lengthAndValues[0], 10);
    var numbersAsStrings = lengthAndValues[1].split(' ');
    var xs = numbersAsStrings.map(str => parseInt(str, 10));


    xs.sort((a,b) => a - b);

    var maxNumberOfRepetitions = 0;
    var previousNumberRepetitions = 0;
    var previousNumber;
    var mode = xs[0];
    var sum = 0;
    var length = xs.length;

    for (var i = 0; i < length; i++) {
        // mode finding section
        if (xs[i] === previousNumber) {
            // the same number again
            previousNumberRepetitions++;

            if (previousNumberRepetitions > maxNumberOfRepetitions) {
                mode = xs[i];
                maxNumberOfRepetitions = previousNumberRepetitions;
            }
        }
        else {
            // new number
            previousNumberRepetitions = 0;
        }

        previousNumber = xs[i];
        sum += xs[i];
    }

    var mean = sum / length;

    // median finding section
    var median;

    if (length % 2 === 0) {
        var middleIndex = length / 2;
        median = (xs[middleIndex-1] + xs[middleIndex]) / 2;
    }
    else {
        median = xs[Math.floor(length / 2)];
    }

    return mean + "\n" + median + "\n" + mode;
};
