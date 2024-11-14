function solution(queue1, queue2) {
    const sum1 = queue1.reduce((a, b) => a + b, 0);
    const sum2 = queue2.reduce((a, b) => a + b, 0);
    const target = (sum1 + sum2) / 2;

    if ((sum1 + sum2) % 2 !== 0) return -1;

    const combinedQueue = [...queue1, ...queue2];
    let currentSum = sum1;
    let p1 = 0;
    let p2 = queue1.length;
    let moves = 0;

    while (p1 < combinedQueue.length && p2 < combinedQueue.length * 2) {
        if (currentSum === target) return moves;
        if (currentSum < target) {
            currentSum += combinedQueue[p2 % combinedQueue.length];
            p2++;
        } else {
            currentSum -= combinedQueue[p1 % combinedQueue.length];
            p1++;
        }
        moves++;
    }
    return -1;
}
