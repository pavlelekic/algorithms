// @flow weak

function solution(carsOnTheRoad) {
    var carsInForwardDirection = 0;
    var passingCarsCount = 0;

    for (var i = 0; i < carsOnTheRoad.length; i++) {
        if (carsOnTheRoad[i] === 0) {
            carsInForwardDirection++;
        }
        else {
            passingCarsCount += carsInForwardDirection;
        }
    }

    return passingCarsCount > 1000000000 ? -1 : passingCarsCount;
}
