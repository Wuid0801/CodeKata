function solution(number, limit, power) {
    var answer = 0;
    // number의 수만큼 반복하고 각각의 요소가 들어간 배열을 만들고 
    // 약수의 개수를 판별해서 총 result를 구하면 될 것 같다.
    for(let i = 1; i <= number; i++){
        let num = 0;
        for(let j = 1; j<= Math.sqrt(i); j++){
            if(i % j ===0){
                if(i/j===j)num++;
                else num+=2;
            }
        }
        if(num <=limit){
            answer += num;
        }
        else
            answer += power;
    }
    
    return answer;
}