function solution(answers) {
    var answer = [];
    let FirstSupoja = [1, 2, 3, 4, 5];
    let SecondSupoja = [2, 1, 2, 3, 2, 4, 2, 5];
    let ThirdSupoja = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === FirstSupoja[i % 5]) num1++;
        if (answers[i] === SecondSupoja[i % 8]) num2++;
        if (answers[i] === ThirdSupoja[i % 10]) num3++;
    }

    let maxNum = Math.max(num1, num2, num3);

    if (maxNum === num1) answer.push(1);
    if (maxNum === num2) answer.push(2);
    if (maxNum === num3) answer.push(3);

    return answer;
}