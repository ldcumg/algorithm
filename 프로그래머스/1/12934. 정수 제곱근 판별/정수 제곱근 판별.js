function solution(n) {
  const squareRootN = Math.sqrt(n);
  return Number.isInteger(squareRootN) ? Math.pow(squareRootN + 1, 2) : -1;
}
