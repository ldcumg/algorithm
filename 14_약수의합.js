function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    n % i || (sum += i);
  }
  return sum;
}