function solution(x, n) {
  const answer = [];
  let i = x;
  while (answer.length !== n) {
    answer.push(i);
    i += x;
  }
  return answer;
}

const solution = (x, n) => Array.from({ length: n }, (_, i) => (i + 1) * x);
