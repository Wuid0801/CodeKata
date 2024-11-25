function solution(n, vertex) {
    // 그래프를 인접 리스트 형태로 초기화
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of vertex) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // BFS를 위한 큐와 방문 배열 초기화
    const visited = Array(n + 1).fill(false);
    const distances = Array(n + 1).fill(0);
    const queue = [1];
    visited[1] = true;

    // BFS 수행
    while (queue.length > 0) {
        const current = queue.shift();
        for (const neighbor of graph[current]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
            }
        }
    }

    // 가장 먼 거리 계산 및 해당 거리의 노드 개수 카운트
    const maxDistance = Math.max(...distances);
    return distances.filter(distance => distance === maxDistance).length;
}
