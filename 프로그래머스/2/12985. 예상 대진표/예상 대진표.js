function solution(n,a,b) {
    var answer = 0;

    
    // 짝수면 그대로 반으로 나누면 되고 홀수면 올림으로 나누면 된다.
    while (a !== b) {
        answer++;
        // a와 b가 같은 그룹에 속할 때까지 그룹을 나눔
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
    }

    return answer;
}