function solution(players, callings) {
    // 각 선수가 불린 만큼 반복하고
    // 불린 선수의 인덱스를 찾아서 앞의 선수와
    // 자리만 바꿔주면 될것같다.
    // 대신 반복문을 여러가지 쓰면 시간복잡도가 높아졌다.
    // 따로 인덱스를 찾는 코드를 만들어서 사용했다.
    
    // players의 각 요소에 대해 현재 인덱스를 기록한 객체를 생성
    // 각 선수의 이름을 키, 인덱스를 값
        const indexDictionary = players.reduce((acc, cur, index) => {
        acc[cur] = index;
        return acc;
    }, {});
    for (let i = 0; i < callings.length; i++) {
        const calling = callings[i];
        const curPlayerIndex = indexDictionary[calling];

        // 앞선 선수
        const nextPlayer = players[curPlayerIndex - 1];

        // 자리 교체
        players[curPlayerIndex - 1] = calling;
        players[curPlayerIndex] = nextPlayer;

        // 객체 인덱스 순서도 변경
        indexDictionary[calling] -= 1;
        indexDictionary[nextPlayer] += 1;
    }

    return players;
}