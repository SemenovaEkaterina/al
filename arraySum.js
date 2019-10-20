function arraySum(arr) {
    if (!arr.length) {
        return arr;
    }
    // Best
    var finalSum = arr[0];
    var finalI = 0;
    var finalJ = 0;

    for (var i = 0; i < arr.length; i++) {
        // Best from i
        var localMax = arr[i];
        var localSum = arr[i];
        var localJ = i;

        for (var j = i + 1; j < arr.length; j++) {
            localSum += arr[j];
            if (localSum > localMax) {
                localMax = localSum;
                localJ = j;
            }
        }

        if (localMax > finalSum) {
            finalSum = localMax;
            finalI = i;
            finalJ = localJ;
        }
    }

    return arr.slice(finalI, finalJ + 1);
}

console.log(arraySum([-2, -6, 6, 25, 8, 11, -3, 9]));
// [ 6, 25, 8, 11, -3, 9 ]
console.log(arraySum([1, 2, 3, -4]));
// [ 1, 2, 3 ]
console.log(arraySum([1, 2, 3, -4, 6]));
// [ 1, 2, 3, -4, 6 ]
console.log(arraySum([-1, 1, 2, 3, -4, 6]));
// [ 1, 2, 3, -4, 6 ]