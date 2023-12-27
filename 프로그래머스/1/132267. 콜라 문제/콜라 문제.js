function solution(a, b, n) {
    let num = 0;
    while(n >= a){
        let sum = Math.floor(n / a) * b;
        num += sum;
        n  = n % a + sum;
    }
    return num;
}