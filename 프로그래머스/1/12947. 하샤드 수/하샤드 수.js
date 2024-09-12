function solution(x) {
    const arrayX = Array.from(String(x),strX=>Number(strX))
    return x % arrayX.reduce((acc,cur)=>acc+cur) ? false : true
}