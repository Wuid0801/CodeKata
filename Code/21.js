function solution(x) {
    var answer = x.toString().split('').map(Number);
    var num = 0;
    for(let i = 0; i<answer.length; i++){
        num += answer[i];
    }
    if(x%num === 0){
        return true;
    }
    else
        return false;
}