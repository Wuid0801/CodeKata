function solution(survey, choices) {
    var answer = '';
    // survey의 개수만큼 for문을 돌리고(질문 회수)
    // 4보다 높은지 낮은지에 따라 첫번째 문자인지 두번째인지 결정하면 될것같다
    const typeScores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    for(let i = 0; i < survey.length; i++){
        let num = (choices[i] <= 4) ? survey[i][0] : survey[i][1]
        if(choices[i] === 4) typeScores[num] += 0;
        else if(choices[i]===7||choices[i]===1) typeScores[num] += 3;
        else if(choices[i]===6||choices[i]===2) typeScores[num] += 2;
        else typeScores[num] += 1;
    }
  let table = Object.entries(typeScores);
  for (let i = 0; i < 7; i += 2) {
  	// 성격 유형 각 2개의 점수를 비교
    if (table[i][1] < table[i + 1][1]) answer += table[i + 1][0];
    else answer +=table[i][0];
  }
    return answer;
}