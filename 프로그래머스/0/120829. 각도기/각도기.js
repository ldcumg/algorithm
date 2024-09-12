function solution(angle) {
  let answer;
  switch (true) {
    case angle < 90:
      return answer = 1;
    case angle === 90:
      return answer = 2;
    case angle < 180:
      return answer = 3;
    default:
      return answer = 4;
  }
}