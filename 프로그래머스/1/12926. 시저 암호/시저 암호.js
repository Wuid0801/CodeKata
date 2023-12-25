function solution(s, n) {
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if (s[i] >= 'A' && s[i] <= 'Z') {
            charCode = (charCode - 65 + n) % 26+65;
        }
        else if (s[i] >= 'a' && s[i] <= 'z') {
            charCode = (charCode - 97 + n) % 26 + 97;
        }

        answer += String.fromCharCode(charCode);
    }
    return answer;
}