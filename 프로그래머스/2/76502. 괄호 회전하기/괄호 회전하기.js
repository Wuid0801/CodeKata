function solution(s) {
   var validPairsCount = 0;
    if (s.length % 2 == !0) return 0;
    s = s.split("");
    // 배열 끝에 붙을 start가 {, [, ( 면 continue로 다음으로 넘기고
    // stack 배열에 s의 첫 번째 요소를 넣어준다.
    // {,[,(이 },],)를 만나면 pop하는 식으로 하면 될것 같다
    for (let i = 0; i < s.length; i++) {
        const stack = [];
        let start = s.shift();
        s.push(start);

        if (start === "{" || start === "[" || start === "(") continue;
        stack.push(s[0]);
        for (let j = 1; j < s.length; j++) {
            let last = stack[stack.length - 1];

            last === "{" && s[j] === "}"
                ? stack.pop()
                : last === "[" && s[j] === "]"
                    ? stack.pop()
                    : last === "(" && s[j] === ")"
                        ? stack.pop()
                        : stack.push(s[j]);
        }

        if (stack.length === 0) validPairsCount++;
    }

    return validPairsCount;
}