function solution(ingredient) {
  var answer = 0;
    // 주어진 재료만큼(ingredient) for문을 돌리면 될것 같다
    // 주어진 재료를 push 차곡차곡 쌓으면서 조리 순서가 맞는지 비교하면 될것같다
    // 배열로 했을경우 시간 초과가 되므로 join을 썼다
     const targetBurger = '1231'; // 햄버거 조리 순서를 문자열로 표현
  const burgerStack = []; // 현재 쌓인 재료 저장스택

  for (let i = 0; i < ingredient.length; i++) {
    const currentIngredient = ingredient[i];
    burgerStack.push(currentIngredient);

    if (burgerStack.slice(-4).join('') === targetBurger) {
      burgerStack.splice(-4);
      answer++;
    }
  }

  return answer;
}