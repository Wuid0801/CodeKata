function solution(n, k) {
    let answer = 0;
    n = n.toString(k);
    n = n.split('0').map(e => Number(e));

    for(let i=0; i<n.length; i++) {
        if(n[i] !== 0 && n[i] !== 1) {
            if(isPrime(n[i])){
                answer += 1;
            }
        }
    }

    return answer;
}

function isPrime(num) {
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num % i == 0) return false;
    }

    return true;
}