function solution(t, p) {
    var answer;
    let num = 0;
    for(let i = 0; i <= t.length - p.length; i++){
        answer = '';
        answer = t.slice(i, i + p.length);
        if(answer <= p){
            num++;
        }
    }
    return num;
}