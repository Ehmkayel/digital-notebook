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



