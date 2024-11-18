function solution(numbers) {
    // 가능한 숫자 조합을 저장할 Set
    const possibleNumbers = new Set();

    // 모든 숫자 조합 생성
    function generatePermutations(current, remaining) {
        if (current.length > 0) {
            possibleNumbers.add(parseInt(current, 10));
        }
        for (let i = 0; i < remaining.length; i++) {
            generatePermutations(
                current + remaining[i],
                remaining.slice(0, i) + remaining.slice(i + 1)
            );
        }
    }

    generatePermutations("", numbers);

    // 가능한 숫자 중 최대값 계산
    const maxNumber = Math.max(...possibleNumbers);

    // 에라토스테네스의 체 구현
    const isPrime = Array(maxNumber + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    for (let i = 2; i <= Math.sqrt(maxNumber); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= maxNumber; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // 소수 개수 계산
    let count = 0;
    possibleNumbers.forEach((num) => {
        if (isPrime[num]) {
            count++;
        }
    });

    return count;
}
