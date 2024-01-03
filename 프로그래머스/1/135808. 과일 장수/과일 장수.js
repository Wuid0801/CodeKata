function solution(k, m, score) {
    score.sort((a, b) => a - b);
    let total = 0;
    while(score.length >= m){
        const num = score.splice(score.length - m, m);
        
        const appleMin = m * Math.min(...num);
        
        total += appleMin;
    }
    
    return total;
}