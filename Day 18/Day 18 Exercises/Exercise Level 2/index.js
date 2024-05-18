
//solution 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]
const A = new Set(a)
const B = new Set(b)
let C = new Set(c)
console.log(C)

//solution 2

C = a.filter((value) => B.has(value));
let aInterceptionB = new Set(C)
console.log(aInterceptionB)

//solution 3

C = a.filter((value) => !B.has(value));
let aWithB = new Set(C)
console.log(aWithB)
