function solution(priorities, location) {
    var answer = 0;
    let queue = priorities.map((priority, index) => ({ priority, index })); // 대기 큐 구성

    while (queue.length > 0) {
        const currentProcess = queue.shift(); // 대기 큐에서 프로세스 꺼내기
        const isHigherPriorityExist = queue.some(process => 
        process.priority > currentProcess.priority); // 더높은 우선순위가 있는지 확인

        if (isHigherPriorityExist) {
            queue.push(currentProcess); // 더 높은 우선순위가 있을 경우 꺼낸 프로세스를 다시 큐에 넣기
        } else {
            answer++; // 우선순위가 가장 높은 프로세스를 실행했으므로 실행 순서 증가
            if (currentProcess.index === location) return answer; // 목표 프로세스인 경우 실행 순서 반환
        }
    }
}