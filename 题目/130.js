/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const bl = board.length, b0l = board[0].length, 
          move = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const dfs = (i, j) => {
        // 越界或字符不符合要求
        if (i < 0 || j < 0 || i > bl - 1 || j > b0l - 1 || board[i][j] != 'O') return ;
        board[i][j] = 'A'
        for (let [ m, n ] of move)
            dfs(i + m, j + n)
    }
    // 处理边界上的'O'
    for (let i = 0; i < bl; i++) {
        dfs(i, 0)
        dfs(i, b0l - 1)
    }
    for (let j = 0; j < b0l; j++) {
        dfs(0, j)
        dfs(bl - 1, j)
    }
    for (let i = 0; i < bl; i++)
        for (let j = 0; j < b0l; j++)
            board[i][j] = board[i][j] == 'A'? 'O' : 'X'
    return board
};

