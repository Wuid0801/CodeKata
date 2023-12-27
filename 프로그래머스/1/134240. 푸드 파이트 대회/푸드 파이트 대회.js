function solution(food) {
    var answer = [];
    let num = 0;
    
    for(let i = 1; i<food.length; i++){
        num = food[i]
        while(num > 1){
            num = num - 2;
            answer.push(i);
        }
    }
    return answer.join('') + 0 + answer.reverse().join('');
}