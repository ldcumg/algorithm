function solution(n) {
  for (let x = 1; x < n; x++) {
    if (n % x === 1) return x;
  }
}

function solution(n) {
  let x = 1;
  while (n % x !== 1) x++;
  return x;
}
