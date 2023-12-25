function solution(arr) {
    let minValue = arr.indexOf(Math.min.apply(null, arr));
    arr.splice(minValue,1);
    return arr.length > 0 ? arr : [-1];
}