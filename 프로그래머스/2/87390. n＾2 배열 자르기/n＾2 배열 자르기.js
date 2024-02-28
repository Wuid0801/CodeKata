function solution(n, left, right) {
    var answer = [];
    const maxIndex = Math.min(right, n * n - 1);
    for (let i = left; i <= maxIndex; i++) {
        const row = Math.floor(i / n) + 1;
        const col = i % n + 1;
        const value = Math.max(row, col);
        answer.push(value);
    }
    return answer;
}