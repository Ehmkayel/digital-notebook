// Solution 1: Union of sets A and B

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// Combine arrays a and b
const c = [...a, ...b];

// Create sets A and B from arrays a and b respectively
const A = new Set(a);
const B = new Set(b);

// Create a set C containing all elements from arrays a and b (no duplicates)
let C = new Set(c);
console.log(C);

// Solution 2: Intersection of sets A and B

// Filter elements from array a that are also present in set B
C = a.filter((value) => B.has(value));
// Create a set containing the intersection of sets A and B
let aIntersectionB = new Set(C);
console.log(aIntersectionB);

// Solution 3: Difference of set A with set B

// Filter elements from array a that are not present in set B
C = a.filter((value) => !B.has(value));
// Create a set containing elements from set A that are not in set B
let aWithoutB = new Set(C);
console.log(aWithoutB);
