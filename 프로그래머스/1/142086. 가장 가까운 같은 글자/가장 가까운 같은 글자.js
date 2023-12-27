function solution(s) {
    const answer = [];
    const lastIndex = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!(char in lastIndex)) {
            answer.push(-1);
        } else {
            answer.push(i - lastIndex[char]);
        }
        lastIndex[char] = i;
    }

    return answer;
}