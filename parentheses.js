function parentheses(str) {
    var ROUND_OPEN = '(';
    var ROUND_CLOSE = ')';
    var SQUARE_OPEN = '[';
    var SQUARE_CLOSE = ']';
    var CORNER_OPEN = '<';
    var CORNER_CLOSE = '>';

    var OPENED = [ROUND_OPEN, SQUARE_OPEN, CORNER_OPEN];
    var CLOSED = [ROUND_CLOSE, SQUARE_CLOSE, CORNER_CLOSE];

    var PAIRS = {
        [ROUND_OPEN]: ROUND_CLOSE,
        [SQUARE_OPEN]: SQUARE_CLOSE,
        [CORNER_OPEN]: CORNER_CLOSE
    };


    var stack = [];

    for (var i = 0; i < str.length; i++) {
        var current = str[i];
        if (OPENED.indexOf(current) !== -1) {
            stack.push(str[i])
        }

        if (CLOSED.indexOf(current) !== -1) {
            var currentOpen = stack.pop();
            if (!currentOpen || PAIRS[currentOpen] !== current) {
                return false;
            }
        }
    }
    return true;
}

// console.log(parentheses("[( 1 + 1 * <1 + 2> ) + ( 1 + 1 )]"));
// true
// console.log(parentheses("<1 + 2> [3 * 2]"));
// true
// console.log(parentheses(")"));
// false
// console.log(parentheses("(]"));
// false
