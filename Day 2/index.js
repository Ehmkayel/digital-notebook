//primitive data types example

let numOne = 25;
let numTwo = 10;
console.log(numOne == numTwo);

let herName = 'Khayrah';
let hisName = 'Khayrah';
console.log(herName == hisName);

//Non-primitive data types example;
//using array
let fruits = ['guava', 'apple', 'pineapple', 'mango'];
fruits[1] = 'Strawberry';
console.log(fruits)

//non-primitive data cannot be compared, even if the value are same it will return false
let myBestFruits = ['guava', 'apple', 'grape' ];
let khayrahBestFruits = ['gauva', 'apple', 'grape'];
console.log(myBestFruits == khayrahBestFruits); //the answer will be false

const value = 22.9;
console.log(value);
console.log(Math.floor(value));
console.log(Math.random());
console.log(Math.round(value));
console.log(Math.ceil(value));
console.log(Math.min(9, 56, 8, 0, -3, 20));
console.log(Math.max(9, 56, 8, 0, -3, 20 ));

//string concatenation
//this is connecting two or more strings together

const dataName = 'Risqotulah';
console.log(dataName.substr(4, 6)); //otulah
console.log(dataName.substring(1, 3)); //is
console.log(dataName.split()); // [Risqotullah]
console.log(dataName.split('')); // ['R', 'i', 's', 'q', 'o', 't', 'u', 'l', 'a', 'h']
console.log(dataName.includes('man')); //false
console.log(dataName.includes('khayr')); //false
console.log(dataName.includes('sqo')); //true
console.log(dataName.replace('Risq', 'Moru'));

let string = '10';
let stringConvert = parseInt(string);
console.log(stringConvert); // 10

string = '30';
stringConvert = Number(string);
console.log(stringConvert); // 30

string = '50';
stringConvert = +string;
console.log(stringConvert);

