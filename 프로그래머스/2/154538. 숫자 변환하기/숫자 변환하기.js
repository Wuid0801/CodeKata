function solution(x, y, n) {
    if (x === y) return 0; // x가 이미 y인 경우

    const visited = new Set();
    const queue = [{ value: y, steps: 0 }];

    visited.add(y); // 초기값을 방문으로 설정

    while (queue.length > 0) {
        const { value, steps } = queue.shift();

        // 세 가지 반대 연산을 시도합니다.
        const operations = [value - n, value / 2, value / 3];

        for (const nextValue of operations) {
            if (nextValue === x) {
                return steps + 1; // x에 도달하면 현재 단계에서 1을 더한 값을 반환합니다.
            }
            if (nextValue > 0 && Number.isInteger(nextValue) && !visited.has(nextValue)) {
                visited.add(nextValue); // 방문 표시
                queue.push({ value: nextValue, steps: steps + 1 });
            }
        }
    }

    return -1; // x에 도달할 수 없는 경우
}