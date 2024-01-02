function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let index1 = 0;
    let index2 = 0;
    for(let i = 0; i<goal.length;i++){
        if(index1<cards1.length&&goal[i] == cards1[index1]){
            index1++;
            continue;
        }
        if(index2<cards2.length&&goal[i] == cards2[index2]){
            index2++;
            continue;
        }
        answer = "No";
        break;
    }
    return answer;
}