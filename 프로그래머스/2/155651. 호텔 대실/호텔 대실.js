function solution(book_time) {
    // HH:MM 형식을 분 단위로 변환하는 함수
    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    // 각 예약의 시작, 종료 시간을 분 단위로 변환
    const times = book_time.map(([start, end]) => [timeToMinutes(start), timeToMinutes(end) + 10]);

    // 시작 시간을 기준으로 정렬
    times.sort((a, b) => a[0] - b[0]);

    // 사용 중인 객실 종료 시간을 저장하는 배열
    let rooms = [];

    for (const [start, end] of times) {
        // 기존 객실 중 사용 가능한 객실 찾기
        let roomFound = false;
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] <= start) {
                // 이 객실을 사용할 수 있으면 종료 시간 갱신
                rooms[i] = end;
                roomFound = true;
                break;
            }
        }

        // 사용 가능한 객실이 없다면 새로운 객실 추가
        if (!roomFound) {
            rooms.push(end);
        }
    }

    // 필요한 최소 객실 수는 rooms 배열의 길이
    return rooms.length;
}