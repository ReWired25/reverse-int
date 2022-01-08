module.exports = function reverse (n) {
    if (n < 0) {n = -n};
    let arr = (n.toString()).split('');
    arr = arr.reverse();
    return Number(arr.join(''));
}