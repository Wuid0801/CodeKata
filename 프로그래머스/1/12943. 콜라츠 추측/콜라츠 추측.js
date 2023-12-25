function solution(num) {
    var answer = num;
    var result = 1;
    while(answer != 1 || result == 500){
        if(answer % 2 === 0)
            answer = answer / 2 ;
        else 
            answer = answer * 3 + 1;
        result++;
        if(result === 500){
            result = 0;
            break;
        }
    }
    
    return result-1;
}