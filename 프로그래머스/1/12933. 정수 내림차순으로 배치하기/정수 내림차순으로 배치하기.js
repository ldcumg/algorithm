function solution(n) {
  const arrayN = [...String(n)];
  return Number(arrayN.sort((a, b) => b - a).join(""));
}
