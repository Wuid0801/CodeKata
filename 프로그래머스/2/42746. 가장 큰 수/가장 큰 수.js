function solution(numbers) {
    // 모든 숫자를 문자열로 변환
    let strNumbers = numbers.map(String);

    // 두 문자열을 이어붙였을 때 더 큰 값이 나오도록 정렬
    strNumbers.sort((a, b) => (b + a) - (a + b));

    // 정렬된 문자열을 합쳐 결과 반환
    let answer = strNumbers.join('');

    // 결과가 '000...'인 경우 '0'으로 반환
    return answer[0] === '0' ? '0' : answer;
}
