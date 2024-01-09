function solution(n, m, section) {
    var answer = 0;
    // 안칠한 구역
    let num = 0;
    // 첫 칠해야하는 구역부터 차례대로 더해가면 된다 생각했다
    // for문을 돌려 길이만큼 반복하고 section[i](칠해야 하는 구역)가 안칠한 구역보다 크면 칠해주는 느낌으로 하였다
    for(let i = 0; i < section.length; i++){
        if(num < section[i])
            {
                answer++;
                // 0부터 시작이므로 -1
                num = section[i] + m -1;
            }
    }
    return answer;
}