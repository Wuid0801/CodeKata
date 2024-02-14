function solution(s) {
    var answer = [];
    // 0의 개수를 세면서 2진법으로 표현하고를 반복하면 될것 같다
    let count = 0;
    let removedZeros = 0;

    // 주어진 문자열이 "1"이 될 때까지 반복
    while (s !== "1") {
        // 0의 개수를 세는 변수
        let zeroCount = 0;
        // 주어진 문자열을 순회하여 0의 개수를 센다
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "0") {
                zeroCount++;
            }
        }
        // 0을 제외한 문자열의 길이를 이진법으로 표현하여 새로운 문자열로 갱신한다
        s = (s.length - zeroCount).toString(2);
        // 변환 횟수를 증가시킨다
        count++;
        // 제거된 0의 개수를 누적한다
        removedZeros += zeroCount;
    }
    
    return [count, removedZeros];
}