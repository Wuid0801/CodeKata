function solution(numbers) {
    var answer = [...numbers];
    var number = [];
    for(let i = 0; i < answer.length - 1; i++){
        for(let j = i + 1; j < answer.length; j++){
            const num = answer[i] + answer[j];
                if(!number.includes(num)){
                    number.push(num);
                }
           
        }
       
    }
    return number.sort((a,b)=>a-b);
}