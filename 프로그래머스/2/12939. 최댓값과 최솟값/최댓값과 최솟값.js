function solution(s) {
    var answer ='';
    // s 문자열을 배열로 자르고 각각의 수를 비교해서 최소값 따로 최대값 따로 놔두면 될것같다.
     // 문자열을 공백으로 분리하여 숫자 배열로 변환
    const numbers = s.split(' ').map(Number);

    // 최소값과 최대값을 찾음
    const minNum = Math.min(...numbers);
    const maxNum = Math.max(...numbers);

    // 결과 문자열 생성
    answer = `${minNum} ${maxNum}`;

    return answer;
}
   