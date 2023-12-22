function solution(a, b) {
    var answer = 0;
    var minNumber = Math.min(a,b);
    var maxNumber = Math.max(a,b);
    for(let i = minNumber; i <= maxNumber; i++){
        answer +=i;
    }
    return answer;
}