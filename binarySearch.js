function binarySearch(arr, elem) {
    var left = 0;
    var right = arr.length;
    while (left < right) {
        var pivot = Math.floor(((right + left) / 2));

        if (arr[pivot] === elem) {
            return pivot;
        }

        if (elem <= arr[pivot]) {
            right = pivot;
        } else {
            left = pivot + 1;
        }
    }

    return -1;
}

// console.log(binarySearch([1, 2, 4, 6, 9, 10, 12, 15, 16], 6));
// 3
// console.log(binarySearch([1, 2, 4, 6, 9, 10, 12, 15, 16], 4));
// 2
// console.log(binarySearch([1, 2, 4, 6, 9, 10, 12, 15, 16], 15));
// 7
// console.log(binarySearch([1, 2, 4, 6, 9, 10, 12, 15, 16], 16));
// 8
// console.log(binarySearch([1, 2, 4, 6, 9, 10, 12, 15, 16], 20));
// -1
// console.log(binarySearch([1, 2], 1));
// 0
// console.log(binarySearch([1, 2], 2));
// 1
// console.log(binarySearch([1, 2], 3));
// -1