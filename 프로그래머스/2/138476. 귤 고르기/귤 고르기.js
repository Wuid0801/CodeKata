function solution(k, tangerine) {
    // 귤 크기별로 개수 세기
    const countMap = {};
    for (const size of tangerine) {
        countMap[size] = (countMap[size] || 0) + 1;
    }

    // 크기별 개수를 내림차순 정렬
    const counts = Object.values(countMap).sort((a, b) => b - a);

    // 필요한 귤의 개수가 k개가 될 때까지 가장 개수가 많은 크기부터 선택
    let selectedCount = 0;
    let varietyCount = 0;
    
    for (const count of counts) {
        selectedCount += count;
        varietyCount += 1;
        if (selectedCount >= k) break;
    }

    return varietyCount;
}