
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (Array.isArray(matrix)) {
        return matrix.reduce((acc, item, index) => index % 2 !== 0 ? acc.concat(item.reverse()) : acc.concat(item), []);
    }
    else {
        return [];
    }

}
