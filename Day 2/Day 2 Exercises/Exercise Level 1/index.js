let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substr(3, 20));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

const brands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(brands.split(','));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

const sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));

const stringTrim = ' 30 Days Of JavaScript '
console.log(stringTrim.trim());

console.log(challenge.startsWith(3));
console.log(challenge.endsWith('t'));


let matchA = "30 Days Of JavaScript";
let matchesAllTheA = /a/gi; 

console.log(matchA.match(matchesAllTheA));

const days = '30 days of';
const course = 'JavaScript';
console.log(days.concat(' ', course));

console.log(challenge.repeat(2));

