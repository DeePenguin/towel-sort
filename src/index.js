module.exports = function towelSort (matrix) {
    if (matrix === undefined) return [];
    return matrix.flatMap((arr, i) => {
        if (i % 2 === 0) return arr;
        else return arr.reverse();
    }) ;
}
