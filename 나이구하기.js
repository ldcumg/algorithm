function solution(age) {
  let now = new Date();
  return now.getFullYear() - age - 1;
}