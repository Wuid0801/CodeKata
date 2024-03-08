function solution(k, dungeons) {
    let answer = 0;

    // 던전을 피로도가 낮은 순으로 정렬
    dungeons.sort((a, b) => a[1] - b[1]);
    
    // 방문했는지 확인하기 위한 배열
    const visited = Array.from({ length: dungeons.length }, () => false);

    // DFS를 사용하여 선택된 던전을 탐험할 수 있는 최대 수 계산
    function DFS(hp, L) {
        // DFS 종료 조건
        if (L === dungeons.length) {
            answer = Math.max(answer, L);
            return;
        }

        // 현재 피로도로 탐험할 수 있는 던전 선택
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= hp) {
                visited[i] = true;
                DFS(hp - dungeons[i][1], L + 1);
                visited[i] = false;
            }
        }

        // 선택된 던전으로 탐험할 수 있는 최대 수 갱신
        answer = Math.max(answer, L);
    }

    // DFS 실행
    DFS(k, 0);

    return answer;
}
