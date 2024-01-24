function solution(s, skip, index) {
  let result = "";
  let characters = s.split("");

  characters.map((char) => {
    let charCode = char.charCodeAt(); 

    for (let i = 0; i < index; i++) {
      charCode++; 
      
      if (charCode > 122) {
        charCode = 97;
      }

      // 다시 문자로 변환해서 skip에 들어있는지 확인
      while (skip.includes(String.fromCodePoint(charCode))) {
        charCode++; 
        if (charCode > 122) {
          charCode = 97;
        }
      }
    }

    result = result + String.fromCodePoint(charCode);
  });

  return result;
}