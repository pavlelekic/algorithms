var input = `10
64630 11735 14216 99233 14470 4978 73429 38120 51135 67060`;
var lengthAndValues = input.split("\n");
//var length = parseInt(lengthAndValues[0], 10);
var numbersAsStrings = lengthAndValues[1].split(' ');
var xs = numbersAsStrings.map(str => parseInt(str, 10));

xs.sort((a,b) => a - b);

var maxNumberOfRepetitions = 0;
var currentNumberRepetitions = 0;
var currentNumber = xs[0];
var mode;
var sum = 0;
var length = xs.length;

for (var i = 0; i < length; i++) {
  // mode finding section
  if (xs[i] === currentNumber) {
    // the same number again
    currentNumberRepetitions++;

    if (currentNumberRepetitions > maxNumberOfRepetitions) {
      mode = xs[i];
      maxNumberOfRepetitions = currentNumberRepetitions;
    }
  }
  else {
    currentNumberRepetitions = 0;
  }

  currentNumber = xs[i];
  
  // median finding section
  sum += xs[i];
}

var mean = sum / length;
var median;

if (length % 2 === 0) {
  var middleIndex = length / 2;
  median = (xs[middleIndex-1] + xs[middleIndex]) / 2;
}
else {
  median = xs[Math.floor(length / 2)];
}

console.log(mean);
console.log(median);
console.log(mode);


