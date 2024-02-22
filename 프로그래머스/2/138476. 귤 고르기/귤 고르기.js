function solution(k, tangerine) {
    // 1) 귤의 크기별 개수를 담을 map 생성한다.
    const kind = new Map();
    let answer =0 ;
    
    // 2) 크기별 개수를 구한다.
    tangerine.forEach(org => {
        kind.set(org, kind.has(org) ? kind.get(org)+1 : 1);
    });

    // 3) 귤의 개수에 따른 내림차순 정렬
    const sortArr = [... kind].sort((a,b) => b[1] - a[1]);
    
    // 4) BOX에 담는다.
    sortArr.forEach(arr => {
        // 5) 담을 개수(k)가 0보다 클 때만 BOX에 담는다.
        if(k > 0) {
            // 6)  담을 개수 - 귤의 개수
            k -= arr[1];    
            
            // 7) 담게 되면 Box에 새로운 크기의 귤이 들어 오므로 1증가
            answer++;
        } 
    });
    // 8) 귤의 크기별 종류를 return한다.
     return answer;
};