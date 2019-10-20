function permutation(n) {
    function mix(base, n) {
        var result = [];
        for (var i = 0; i < base.length + 1; i++) {
            result.push(base.slice(0, i) + n + base.slice(i))
        }
        return result;
    }

    var i = 1;
    var result = [i];

    while (i < n) {
        i++;
        const temp = [];
        result.forEach(function (item) {
            temp.push(...mix(item.toString(), i));
        });
        result = temp;
    }

    const numberResult = [];
    result.forEach(function (item) {
       numberResult.push(parseInt(item));
    });

    return numberResult;
}


// console.log(permutation(1));
// [ 1 ]
// console.log(permutation(2));
// [ 21, 12 ]
// console.log(permutation(3));
// [ 321, 231, 213, 312, 132, 123 ]