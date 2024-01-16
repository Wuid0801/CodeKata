function solution(babbling) {
    const pronunciation = ['aya','ye','woo','ma'];
    var answer = 0;
    //머쓱;;
    // 이문제도 includes로 포함되어있는지를 비교하면 될것같았다
    // for을 babbling만큼 돌리고 그안에서 발음 네가지를 비교해서 맞는지를 체크하면 될것같았다
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < pronunciation.length; j++){
            // 발음이 연속이면 반복 그만
            if(babble.includes(pronunciation[j].repeat(2))){
                break;
            }
            
            babble = babble.split(pronunciation[j]).join(" ");
        }
        
        if(babble.split(" ").join("").length === 0){
            answer += 1;
        }
    }
    
    return answer;
}