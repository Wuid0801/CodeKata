function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    let answer = /^[^a-zA-Z]*$/;
    return answer.test(s);
}