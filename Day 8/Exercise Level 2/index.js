// //solution 1

const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let charactersByRandom = '';
const lengthOfCharacter = Math.random() * 12;
for (let i = 0; i < lengthOfCharacter; i++) {
    const random = Math.floor(Math.random() * character.length); 
    charactersByRandom += character[random];
}
console.log(charactersByRandom);

//solution 2
const characters = '0123456789ABCDEF';
let hexadecimal = '';
const length = 6; 
for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    hexadecimal += characters[randomNumber];
}
console.log(hexadecimal);

//solution 3

const red = Math.floor(Math.random() * 256); 
const green = Math.floor(Math.random() * 256); 
const blue = Math.floor(Math.random() * 256); 
const randomColor = `rgb(${red}, ${green}, ${blue})`;
console.log(randomColor);

//solution 4

const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Iceland',
        'Japan',
        'Kenya'
    ]
const string = countries.toString()
const stringToUppercase = string.toUpperCase();
console.log(stringToUppercase.split(','));

//solution 5

const countriesLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length);
}
console.log(countriesLength);

//solution 6

const countriesData = [];
const countriesAbbr = ["Alb", "Bol", "Can", "Den", "Eth", "Fin", "Ger", "Hun", "Ire", "Ice", "Jap", "Ken"];

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const countryCode = countriesAbbr[i].toUpperCase(); 
    const countryLength = country.length;
    countriesData.push([country, countryCode, countryLength]);
}

console.log(countriesData);

//solution 7

const newArray =[];
for(let i = 0; i < countries.length; i++){
     if(countries[i].includes('land') === true){
        newArray.push(countries[i])
     }
}
if(newArray.length === true){
  console.log('All these countries are without land')
}else{
  console.log(newArray)
}

//solution 8

const countriesSubstring = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes('ia') === true){
        countriesSubstring.push(countries[i])
    }
}
if(countriesSubstring.lenght === true){
    console.log('These are countries ends without ia')
}else{
    console.log(countriesSubstring)
}

//solution 9

let biggestNumberOfCharacters = ''
for (let i = 0; i < countries.length; i++){
    if(countries[i].length > biggestNumberOfCharacters.length){
        biggestNumberOfCharacters = countries[i];
    }
}
console.log(biggestNumberOfCharacters);

//solution 10

let onlyFiveCharacters = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].length === 5){
        onlyFiveCharacters.push(countries[i])
    }
}
console.log(onlyFiveCharacters);

//solution 11

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let longestWebTechWord = '';
for(let i = 0; i < webTechs.length; i++){
    if (webTechs[i].length > longestWebTechWord.length){
        longestWebTechWord = webTechs[i];
    }
}
console.log(longestWebTechWord);

//solution 12

const webTechsData = [];
for (let i = 0; i < webTechs.length; i++) {
    const webTech = webTechs[i]; 
    const webTechsLength = webTechs.length;
    webTechsData.push([webTech,  webTechsLength]);
}

console.log(webTechsData);

//solution 13

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronymMern = ''
for(let i = 0; i < mernStack.length; i++){
   acronymMern += mernStack[i][0];
}
console.log(acronymMern);

//solution 14

const arrayGiven = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
const newWebTechs = [];
for(const stacks of arrayGiven){
    newWebTechs.push(stacks);
}
console.log(newWebTechs);

//solution 15
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];

for(let i = fruits.length - 1; i >= 0; i--){
    reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

//solution 16

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for(let i = 0; i < fullStack.length; i++){
    for(let k = 0; k < fullStack[i].length; k++){
        console.log(fullStack[i][k].toUpperCase());
    }
  }




