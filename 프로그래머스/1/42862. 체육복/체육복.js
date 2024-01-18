function solution(n, lost, reserve) {
    var answer = 0;
    // 결과가 최대값이니까 lost 배열의 인덱스 기준으로 -1,+1한 값까지 포함하는지 확인
    // 그리고 자기자신한테는 빌려줄수 없으니 제외 fiter함수로 간단하게 한다
    
    // 체육복 도난당한 학생 중 여벌 체육복이 있는 학생은 빌려줄 수 없음
    let realLost = lost.filter(student => !reserve.includes(student));
    let realReserve = reserve.filter(student => !lost.includes(student));

     // 여벌 체육복을 가진 학생이 도난당한 학생에게 빌려줄 수 있는 경우
     realReserve.sort((a, b) => a - b); // 여벌 체육복이 있는 학생을 번호순으로 정렬
    for (let i = 0; i < realReserve.length; i++) {
        if (realLost.includes(realReserve[i] - 1)) {
            realLost = realLost.filter(lostStudent => lostStudent !== realReserve[i] - 1);
        } else if (realLost.includes(realReserve[i] + 1)) {
            realLost = realLost.filter(lostStudent => lostStudent !== realReserve[i] + 1);
        }
    }

    // 체육수업을 들을 수 있는 학생의 최댓값 계산
    answer = n - realLost.length;


    return answer;
}
