
function solution(arr) {
    function lcm(a, b) {
        return Math.abs(a * b) / gcd(a, b);
    }

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    return answer;
}