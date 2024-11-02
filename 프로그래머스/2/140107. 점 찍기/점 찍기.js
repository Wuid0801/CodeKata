function solution(k, d) {
    let answer = 0;
    
    // x 값을 0, k, 2k, 3k, ... d 이하가 될 때까지 반복
    for (let x = 0; x <= d; x += k) {
        // 가능한 y의 최대값을 구함
        let max_y = Math.sqrt(d * d - x * x);
        
        // y 값이 k 간격으로 증가하므로 가능한 y 값의 개수는 max_y / k의 정수 부분 + 1
        answer += Math.floor(max_y / k) + 1;
    }
    
    return answer;
}
