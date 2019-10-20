var tree = {
    node: 'A',
    left: {
        node: 'B',
        left: {
            node: 'C',
            left: {
                node: 'E'
            }
        },
        right: {
            node: 'D'
        }
    },
    right: {
        node: 'F'
    }
};


function width(tree) {
    var nodes = [];
    var result = [];
    nodes.push(tree);

    while (nodes.length > 0) {
        var current = nodes[0];
        result.push(current.node);
        if (current.left) {
            nodes.push(current.left);
        }
        if (current.right) {
            nodes.push(current.right);
        }
        nodes.splice(0, 1);
    }

    return result;
}

function depth(tree) {
    function parseNode(node) {
        var result = [node.node];
        if (node.left) {
            result.push(...parseNode(node.left));
        }
        if (node.right) {
            result.push(...parseNode(node.right));
        }
        return result;
    }
    return parseNode(tree);
}

console.log(width(tree));
console.log(depth(tree));