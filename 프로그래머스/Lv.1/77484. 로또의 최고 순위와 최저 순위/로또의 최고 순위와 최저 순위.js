function solution(lottos, win_nums) {
    let MaxNum = 0;
    let MinNum = 0;
    // includs을 사용해서 하면 되지 않을까 처음에 생각을했다
    // 0일경우와 아닐경우를 비교해서 하려하였다
    // 최소와 최대를 나눠 생각하였다
    for(let i = 0; i < lottos.length ; i++){
        if(lottos[i] === 0){
            MaxNum++;
        }
        else if(lottos[i] !== 0 && win_nums.includes(lottos[i])){
            MaxNum++;
            MinNum++;
        }
    }
    // 순위를 어떻게 표현할지 고민하였다
    // 최대와 최소의 같은 번호는 구현하였고 그걸 순위로 표현하려 생각했다..
    
    return [7-Math.max(MaxNum,1),7-Math.max(MinNum,1)];
}