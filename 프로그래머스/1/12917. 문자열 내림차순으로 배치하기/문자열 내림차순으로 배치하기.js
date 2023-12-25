function solution(s) {
    var answer = '';
    answer = s.split('');
    return answer.sort((a, b) => a > b ? -1 : 1).join("");
}