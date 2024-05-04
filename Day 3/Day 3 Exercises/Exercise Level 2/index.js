// //solution 1
const b = parseInt(prompt('Enter base'));
const h = parseInt(prompt('Enter height'));
const area = 0.5 * b * h;
console.log(`The area of the triangle is: ${area}`);

// //solution 2
const sideA = parseInt(prompt('Enter side a'));
const sideB = parseInt(prompt('Enter side b'));
const sideC = parseInt(prompt('Enter side c'));
const perimeterOfTriangle = sideA + sideB + sideC;
console.log(perimeterOfTriangle);

// //solution 3
const length = parseInt(prompt('Enter Length'));
const width = parseInt(prompt('Enter Width'));
const areaOfTheTriangle = length * width;
const perimeterOfTheTriangle = 2 * (length + width);
console.log(areaOfTheTriangle);
console.log(perimeterOfTheTriangle);

// //solution 4
const pi = 3.14
const r = parseInt(prompt('Enter Radius'));
const areaOfACircle = pi * r * r;
const circumferenceOfACircle = 2 * pi * r;
console.log(areaOfACircle);
console.log(circumferenceOfACircle);

//solution 5

let initialValueOfX = 0;
let initialValueOfY = 0;
const y = (2 * initialValueOfX) + -2;
console.log(y);
let xIntercept = (2 * initialValueOfY) + -2;
console.log(xIntercept);
const totalValueOfX = initialValueOfX - xIntercept;
console.log(totalValueOfX);
const totalValueOfY = initialValueOfY - y;
const slope = Math.ceil((totalValueOfX/totalValueOfY));
console.log(slope);

//solution 6

const y1 = 2;
const y2 = 2;
const x1 = 10;
const x2 = 6;
const slopeM = (y2 - y1)/(x2 - x1);
console.log(slopeM);

//solution 7

console.log(slope !== slopeM);

//solution 8

let initialValueX = 25;
let valueOfY = (initialValueX * 2) + (6 * initialValueX) + 9;
console.log(valueOfY);
initialValueX = 5.4;
 valueOfY = (initialValueX * 2) + (6 * initialValueX) + 9;
 console.log(valueOfY);
initialValueOfX = 0;
valueOfY = (initialValueX * 2) + (6 * initialValueX) + 9;
console.log(valueOfY);
initialValueX = -9;
valueOfY = (initialValueX * 2) + (6 * initialValueX) + 9;
console.log(valueOfY);
initialValueX = -1.125;
valueOfY = (initialValueX * 2) + (6 * initialValueX) + 9;
console.log(valueOfY);

//solution 9
let hours = parseInt(prompt('Enter hours'));
let ratePerHour = parseInt(prompt('Enter rate per hour'));
let pay = hours * ratePerHour;
console.log(pay);

//solution 10
let myName = 'Ramadan';
if(myName.length > 7){
  console.log( 'Your name is long'); 
}else{
    console.log('Your name is short')
}

//solution 11
const firstName = 'Morufat';
const lastName = 'Lamidi';
if(firstName.length > lastName.length){
    console.log(`Your first name, ${firstName} is longer than your family name,${lastName}`);
}
else{
    console.log(`Your family name,${lastName}is longer than your first name, ${firstName}`);
}

//solution 12
const myAge = '250';
const yourAge = '25';
const ageDeduction = myAge - yourAge;
console.log(`I am ${ageDeduction} years older than you`);

//solution 13
const userBirthYear = parseInt(prompt('Enter your birth year'));
const Now = new Date()
const presentYear = Now.getFullYear();
const userPresentAge = Now.getYear() - userBirthYear + 1900;
console.log(userPresentAge);
if(userPresentAge >= 18){
    console.log(`You are ${userPresentAge}, you will be allowed to drive `);
}else{
    console.log(`You are ${userPresentAge} and not allowed to drive`);
}

//solution 14
const numberOfYears = parseInt(prompt('Enter the number of years you have lived'));
const nowYear = new Date();
const secondsLived = nowYear.getTime(numberOfYears);
console.log(`You lived ${secondsLived} seconds`);

//solution 15
const newDate = new Date();
const year = newDate.getFullYear();
const month = newDate.getMonth();
let hour = newDate.getHours();
let day = newDate.getDay();
let minutes = newDate.getMinutes()
console.log(`${year}-${month}-${day} ${hour}:${minutes}`);
console.log(`${day}-${month}-${year} ${hour}:${minutes}`);
console.log(`${day}/${month}/${year} ${hour}:${minutes}`);
