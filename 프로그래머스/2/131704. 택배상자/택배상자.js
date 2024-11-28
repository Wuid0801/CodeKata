function solution(order) {
    let stack = []; // 스택
    let index = 0;  // 트럭에 실어야 할 상자의 순서
    let n = order.length; // 개수

    for (let i = 1; i <= n; i++) { // 컨테이너 벨트에서 상자를 하나씩 확인
        if (order[index] === i) {
            // 컨테이너 벨트에서 바로 실을 수 있는 경우
            index++;
        } else {
            // 스택에 보관
            stack.push(i);
        }

        // 스택에서 실을 수 있는 상자를 처리
        while (stack.length > 0 && stack[stack.length - 1] === order[index]) {
            stack.pop();
            index++;
        }
    }

    return index; // 실을 수 있는 상자의 개수
}
