//solution 1
const b = parseInt(prompt('Enter base'));
const h = parseInt(prompt('Enter height'));
const area = 0.5 * b * h;
console.log(`The area of the triangle is: ${area}`);

//solution 2
const sideA = parseInt(prompt('Enter side a'));
const sideB = parseInt(prompt('Enter side b'));
const sideC = parseInt(prompt('Enter side c'));
const perimeterOfTriangle = sideA + sideB + sideC;
console.log(perimeterOfTriangle)

//solution 3
const length = parseInt(prompt('Enter Length'));
const width = parseInt(prompt('Enter Width'));
const areaOfTheTriangle = length * width;
const perimeterOfTheTriangle = 2 * (length + width);
console.log(areaOfTheTriangle);
console.log(perimeterOfTheTriangle);

