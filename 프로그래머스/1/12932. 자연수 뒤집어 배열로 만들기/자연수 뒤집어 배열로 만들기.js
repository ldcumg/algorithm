function solution(n) {
  return Array.from(String(n), (str) => Number(str)).reverse();
}