/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    const degree = new Array(n).fill(0), connect = new Map()
    for(const edge of edges) {
        const a = edge[0], b = edge[1]
        degree[a]++
        degree[b]++
        var l0, l1
        if(connect.has(a))
            l0 = connect.get(a)
        else
            l0 = new Array()
        l0.push(b)
        connect.set(a, l0)
        if(connect.has(b))
            l1 = connect.get(b)
        else
            l1 = new Array()
        l1.push(a)
        connect.set(b, l1)
    }
    let nodes = new Array()
    for(let i = 0; i < n; i++)
        if(degree[i] < 2)
            nodes.push(i)
    while(n > 2) {
        n -= nodes.length
        const nxt = new Array()
        for(const node of nodes) {
            for(const other of connect.get(node)) {
                degree[other]--
                if(degree[other] == 1)
                    nxt.push(other)
            }
        }
        nodes = nxt
    }
    return nodes
};
