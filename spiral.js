function spiral(n) {
    var result = [];

    for (var a = 0; a < n; a++) {
        result.push([]);
    }

    var k = 0;
    var counter = 0;


    while (k < Math.ceil(n / 2)) {
        var i = k;
        var j = k;

        var offset = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];

        offset.forEach(function (item) {
            if (counter > n**2) {
                return;
            }

            var iOffset = item[0];
            var jOffset = item[1];

            for (var p = 0; p < (n - k * 2) - 1; p++) {
                counter++;
                if (counter > n**2) {
                    break;
                }

                result[i][j] = counter;
                i += iOffset;
                j += jOffset;


            }
        });


        k++;
    }

    if (n % 2 !== 0) {
        result[i][j] = counter + 1;
    }

    console.table(result);
    return result;
}

spiral(1);
spiral(2);
spiral(3);
spiral(4);
spiral(5);
spiral(6);
