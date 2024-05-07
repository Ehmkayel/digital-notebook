//solution 1

for(let i = 0; i <= 10; i++){
    console.log(i)
}

let i = 0;
while(i <= 10){
    console.log(i);
    i++
}

i = 0
do {
  console.log(i)
  i++
} while (i <= 10)

//solution 2
for (let k = 10; k > 0; k--){
    console.log(k)
}

let d = 10
while(d >= 0){
    console.log(d)
    d--
};

let data = 10
do{
    console.log(data)
    data--
}while(data >= 0);

//solution 3

let n = 5;
for(let i = 0; i <= n; i++){
    console.log(`${n} of ${i}`);
}

//solution 4

let naira = '#';
for(let i = 0; i <= 7; i++){
    console.log(naira);
    naira = naira + '#';
}

//solution 5

for(let i = 0; i <= 10; i++){
    console.log(`${1} x ${i} = ${i * i}`)
}

//solution 6

for(let i = 0; i <= 10; i++){
    console.log(`${i} ${i**2} ${i**3}`)
}


//solution 7

for(let i = 0; i <= 100; i += 2){
    console.log(i);
}

//solution 8

for(let i = 3; i <= 100; i = i + 2){
    console.log(i)
}

//solution 9
let number = 0;
let constant = 1;
let initial;
for(initial = 2; initial <= 100; initial++){
    for(constant = 1; constant <= initial; constant++){
        if(initial % constant === 0)
        number++;
    }
    if(number === 2)
        console.log(initial)
        number = 0;
       
}

//solution 10
let sumOfAllNumbers = 0;
for(let i = 0; i <= 100; i++){
    sumOfAllNumbers = sumOfAllNumbers + i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sumOfAllNumbers}`);

//solution 11
let evenNumber = 0;
let oddNumber = 0;
for(let i = 0; i <= 100; i+=2){
    evenNumber += i;
}
for(let i = 1; i <= 100; i+= 2){
    oddNumber += i
}
console.log(`The sum of all evens from 0 to 100 is ${evenNumber}. And the sum of all odds from 0 to 100 is ${oddNumber}`)


//solution 12
let array = new Array();
array[0] = evenNumber;
array[1] = oddNumber;
console.log(array);

//solution 13

let arrayScript = []
for(let i = 0; i <= 4; i++){
    let randomNumberArray = Math.ceil(Math.random() * 3);
    arrayScript.push(randomNumberArray);
}
console.log(arrayScript);

//solution 14

const numberOfElements = 5;
const randomNumbers = [];

while (randomNumbers.length < numberOfElements) {
  const randomNumber = Math.ceil(Math.random() * 10) + 1;
  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);
  }
}

console.log(randomNumbers);

//solution 15

const charactersByRandom = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randomCharacter = "";
for (let i = 0; i < 6; i++) {
  randomCharacter += charactersByRandom.charAt(Math.ceil(Math.random() * charactersByRandom.length));
}
console.log(randomCharacter);

