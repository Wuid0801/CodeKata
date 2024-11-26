function solution(ingredient) {
    let stack = [];
    let count = 0;

    // 정해진 햄버거 순서
    const burger = [1, 2, 3, 1];

    for (let item of ingredient) {
        stack.push(item); // 재료를 스택에 추가

        // 스택의 마지막 4개가 [1, 2, 3, 1]인지 확인
        if (
            stack.length >= 4 &&
            stack.slice(-4).join('') === burger.join('')
        ) {
            // 햄버거가 만들어졌으면 스택에서 제거
            stack.splice(-4, 4);
            count++; // 햄버거 개수 증가
        }
    }

    return count;
}
