function solution(arr, divisor) {
    var answer = [];
    var num = -1;
    for(let i=0; i<arr.length;i++){
        if(arr[i]%divisor===0){
            answer.push(arr[i]);
            num ++;
        }
        
    }
    if(num == -1){
        answer.push(num);
    }
    return answer.sort((a, b) => a - b);
}