function solution(progresses, speeds) {
    var answer = [];
    let day = 0;
    let count = 0;
    
    //작업의 진도와 개발 속도를 토대로 각 배포마다 몇 개의 기능이 배포되는지를 계산
    while (progresses.length > 0) {
        if (progresses[0] + day * speeds[0] >= 100) {
            progresses.shift();// progresses의 첫 번째 요소를 제거하고 반환
            speeds.shift();
            count++;
        } else {
            if (count > 0) {
                answer.push(count);
                count = 0;
            }
            day++;
        }
    }

    answer.push(count);

    return answer;
}