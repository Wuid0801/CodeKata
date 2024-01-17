function solution(X, Y) {
    // X, Y를 문자열로 변환
    X = X.toString();
    Y = Y.toString();

    let result = '';
    let numCount = new Array(10).fill(0); // 0부터 9까지의 각 숫자의 개수를 저장하는 배열

    // 각 숫자의 개수를 세기
    for (let i = 0; i < X.length; i++) {
        numCount[parseInt(X[i])] += 1;
    }

    // Y의 각 숫자와 비교하며 공통된 숫자 중 가장 큰 것을 찾기
    for (let i = 0; i < Y.length; i++) {
        let digit = parseInt(Y[i]);

        // X에 해당 숫자가 있고, 짝을 지을 수 있는 경우
        if (numCount[digit] > 0) {
            result += digit;
            numCount[digit] -= 1;
        }
    }

    // 공통된 숫자가 없으면 -1 반환
    if (result === '') {
        return '-1';
    }
     // 문자열로 변환 후 정렬하여 가장 큰 수를 만든다
    result = result.split('').sort((a, b) => b - a).join('');

    // 결과가 0으로만 구성되어 있다면, 결과는 0
    if (/^0+$/.test(result)) {
        return '0';
    }

    return result;
}