function solution(today, terms, privacies) {
    var answer = [];

    // 약관 종류별 유효기간을 저장하는 맵 생성
    const termMap = new Map();
    for (let i = 0; i < terms.length; i++) {
        const [type, validity] = terms[i].split(" ");
        termMap.set(type, parseInt(validity));
    }

    // 오늘 날짜를 Date 객체로 변환
    const todayDate = new Date(today);

    for (let i = 0; i < privacies.length; i++) {
        const [privacyDate, type] = privacies[i].split(" ");
        const privacyDateObj = new Date(privacyDate);
        const termValidity = termMap.get(type);

        // 개인정보의 유효기간 계산
        const expirationDate = new Date(privacyDateObj);
        expirationDate.setMonth(expirationDate.getMonth() + termValidity);

        // 유효기간이 오늘 날짜보다 이전이면 해당 개인정보를 파기 대상으로 추가
        if (expirationDate <= todayDate) {
            answer.push(i + 1);
        }
    }

    return answer;
}
