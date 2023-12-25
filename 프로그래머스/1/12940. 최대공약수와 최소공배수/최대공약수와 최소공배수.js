function solution(n, m) {
    let a = Math.min(n,m);
    let b = Math.max(n,m);
    let number = 0;
    while(a % b != 0){
        number = a % b;
        a = b;
        b = number;
    }
    return [number, n*m/number];
}