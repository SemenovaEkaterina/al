function prime(n) {
    const arr = [];
    for (var i = 2; i <= n; i++) {
        arr.push(i);
    }
    for (var p = 0; p < Math.sqrt(n); p++) {
        var divider = arr[p];
        var j = p + 1;
        while (j < arr.length) {
            if (arr[j] % divider === 0) {
                arr.splice(j, 1);
            } else {
                j++;
            }
        }
    }

    return arr;
}

// console.log(prime(10));
// console.log(prime(131));