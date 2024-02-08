function solution(s) {
    var answer = '';
    // 제일 앞에 글일때 Upper를 해주고 
    // 아닐때는 다 Lower를 해주면 될것같다.
    // ' '가 나올때는 넘겨주고
    let capitalizeNext = true;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (capitalizeNext && /[a-zA-Z0-9]/.test(char)) {
            answer += char.toUpperCase();
            capitalizeNext = false;
        } else {
            answer += char.toLowerCase();
        }
        
        if (char === ' ') {
            capitalizeNext = true;
        }
    }

    return answer;
}