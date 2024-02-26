function solution(elements) {
    const n = elements.length;
    elements = elements.concat(elements); // 모든 연속 부분 수열을 구하기 위해 두 번의 원래 배열 붙이기
    
    
    const subsequenceSums = new Set(); // 중복된 합을 제거하기 위해 Set
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        // 현재 위치부터 시작하는 연속 부분 수열을 탐색
        for (let j = i; j < i + n; j++) {
            sum += elements[j];
            subsequenceSums.add(sum);
        }
    }
    
    // 중복을 제거한 합의 개수를 반환
    return subsequenceSums.size;
}