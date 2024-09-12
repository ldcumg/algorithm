function solution(n) {
  let stN = String(n);
  let answer = 0;
  for (let i = 0; i < stN.length; i++) {
    answer += Number(stN[i]);
  }
  return answer;
}
