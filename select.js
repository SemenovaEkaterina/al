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