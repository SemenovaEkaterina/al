function bubble(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubble([5, 2, 1]));
// console.log(bubble([1, 5, 2, 1]));
// console.log(bubble([5, 1, 4, 2, 8]));
// console.log(bubble([8, 1, 4, 2, 5]));
// console.log(bubble([8, 1, 4, 10, 5]));