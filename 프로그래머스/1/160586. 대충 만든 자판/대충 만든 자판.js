function solution(keymap, targets) {
    const map = new Map();

    const answer = new Array(targets.length);
    
    // 여러 문자열에 대한 처리와 특정 문자열을 작성할 수 없는 경우의 예외처리 필요
    // 각 문자열을 돌면서 각 문자당 필요한 키를 누르는 횟수를 계산하면 될 것 같다
    // keymap의 각 행을 반복
    for (let i = 0; i < keymap.length; i++) {
        // 현재 행의 각 문자를 반복합니다.
        for (let j = 0; j < keymap[i].length; j++) {
            // 문자가 맵에 없거나 현재 위치 값보다 큰 경우에만 실행
            if (!map.has(keymap[i].charAt(j)) || map.get(keymap[i].charAt(j)) > j + 1) {
                // 문자를 현재 위치 값 + 1로 맵에 설정
                map.set(keymap[i].charAt(j), j + 1);
            }
        }
    }

    // 각 타겟 문자열에 대해 반복
    for (let i = 0; i < targets.length; i++) {
        // 현재 타겟에 대한 위치 값 합을 저장할 변수를 초기화
        let sum = 0;

        // 현재 타겟 문자열의 각 문자에 대해 반복
        for (let j = 0; j < targets[i].length; j++) {
            // 만약 맵에 해당 문자가 없으면 sum을 -1로 설정하고 반복을 중단
            if (!map.has(targets[i].charAt(j))) {
                sum = -1;
                break;
            } else {
                // 그렇지 않으면 sum에 해당 문자의 위치 값 더하기
                sum += map.get(targets[i].charAt(j));
            }
        }

        answer[i] = sum;
    }

    return answer;
}