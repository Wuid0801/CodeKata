function solution(str)
{
    let arr = String(str).split('').map(Number);
    return arr.reduce((sum, num) => sum + num, 0);
}