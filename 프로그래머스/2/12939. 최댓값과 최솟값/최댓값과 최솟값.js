function solution(s) {
    var answer = '';
    const numbers = s.split(' ').map(Number);

    // 최소값과 최대값을 찾음
    const minNum = Math.min(...numbers);
    const maxNum = Math.max(...numbers);

    // 결과 문자열 생성
    answer = `${minNum} ${maxNum}`;

    return answer;
}
