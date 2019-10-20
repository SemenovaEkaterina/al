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

function select(arr) {
    var sorted = [];
    while (arr.length > 0) {
        var min = arr[0];
        var minIndex = 0;
        arr.forEach(function (item, i) {
            if (item < min) {
                min = item;
                minIndex = i;
            }
        });
        arr.splice(minIndex, 1);
        sorted.push(min);
    }
    return sorted;
}

// console.log(select([2, 1]));
// console.log(select([2, 1, 3]));
// console.log(select([2, 3, 1]));
// console.log(select([0, 2, 1, 4]));