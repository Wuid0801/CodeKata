function solution(s) {
    var answer = 0;
    // 첫글자를 지정하고 x가 나온 횟수와
    // x가 나오지 않은 횟수를 세면서 
    // 두 횟수가 같아지면 반복을 멈춘다, 그리고 분리 후 결과를 추가하면 될것 같다
    
     while (s.length > 0) {
        let x = s[0];  // 첫 글자를 x로 설정
        let count_x = 0;  // x의 등장 횟수
        let count_not_x = 0;  // x가 아닌 글자의 등장 횟수

        // 문자열을 왼쪽에서 오른쪽으로 읽으면서 횟수를 센다
        for (const char of s) {
            if (char === x) {
                count_x++;
            } else {
                count_not_x++;
            }

            // 두 횟수가 같아지면 분리하고 반복을 멈춘다
            if (count_x === count_not_x) {
                break;
            }
        }

        // 현재까지 읽은 부분을 분리하고 남은 부분을 다시 반복
        answer++;
        s = s.slice(count_x + count_not_x);
    }
    
    return answer;
}