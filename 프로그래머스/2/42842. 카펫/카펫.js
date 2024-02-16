function solution(brown, yellow) {
    var answer = [];
     const total = brown + yellow;
    
    // total은 brown + yellow이므로
    // 가로 * 세로 = total을 만족하는 가로와 세로를 찾으면 될 것같다.
    for (let i = 1; i <= total; i++) {
        if (total % i === 0) {
            const width = total / i;
            const height = i;
            // yellow = (width - 2) * (height - 2) 이므로 yellow 갯수가 맞는지 확인
            if ((width - 2) * (height - 2) === yellow) {
                // 갈색 격자의 수는 (가로 + 세로) * 2 - 4 이므로 brown 갯수가 맞는지 확인
                if ((width + height) * 2 - 4 === brown) {
                    return [width, height];
                }
            }
        }
    }
}