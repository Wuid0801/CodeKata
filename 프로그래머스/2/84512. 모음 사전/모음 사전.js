function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const wordMap = {};
    
    // 모든 경우의 수를 생성하여 사전에 추가
    function generateWords(currentWord, depth) {
        if (depth > 5) return;
        wordMap[currentWord] = Object.keys(wordMap).length;
        vowels.forEach((vowel) => {
            generateWords(currentWord + vowel, depth + 1);
        });
    }
    
    generateWords('', 0);
    return wordMap[word];
}
