function solution(topping) {
    let result = 0;
    const leftToppings = new Set();
    const rightToppings = new Map();

    // 모든 토핑을 오른쪽에 배치
    topping.forEach(t => {
        rightToppings.set(t, (rightToppings.get(t) || 0) + 1);
    });

    // 하나씩 왼쪽으로 옮기면서 양쪽의 종류 수를 비교
    for (let i = 0; i < topping.length - 1; i++) {
        const current = topping[i];
        
        // 오른쪽에서 하나 빼기
        rightToppings.set(current, rightToppings.get(current) - 1);
        if (rightToppings.get(current) === 0) {
            rightToppings.delete(current);
        }

        // 왼쪽에 추가
        leftToppings.add(current);

        // 양쪽의 토핑 종류 수가 같으면 공평한 경우로 판단
        if (leftToppings.size === rightToppings.size) {
            result++;
        }
    }

    return result;
}