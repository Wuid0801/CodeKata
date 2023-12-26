function solution(array, commands) {
    const answer = [];
    for(let i = 0; i < commands.length; i++){
        const [start, mid, last] = commands[i];
        const num = array.slice(start-1, mid).sort((a,b)=>a-b);
        answer.push(num[last-1]);
    }
    return answer;
}