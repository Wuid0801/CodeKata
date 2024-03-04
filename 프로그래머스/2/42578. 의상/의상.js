function solution(clothes) {
    var answer = 0;
    const clothesMap = new Map(); // 의상 종류별 의상 개수를 저장할 Map

    // 의상 종류별 의상 개수 파악
    clothes.forEach(([_, type]) => {
        if (clothesMap.has(type)) {
            clothesMap.set(type, clothesMap.get(type) + 1);
        } else {
            clothesMap.set(type, 1);
        }
    });

    answer = 1;

    // 각 의상 종류별 의상 개수에 따른 조합 계산
    clothesMap.forEach(count => {
        answer *= (count + 1); // 해당 종류의 의상을 입지 않는 경우를 포함하기 위해 +1
    });

    // 모든 종류의 의상을 입지 않는 경우는 제외
    return answer - 1;
}