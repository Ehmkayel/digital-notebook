//solution 1
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

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


const countriesCopy = [].concat(countries);
console.log(countriesCopy);

//solution 2

let sortedCountries = countriesCopy.sort();
console.log(sortedCountries)

//solution 3
const sortedWebTechs = webTechs.sort();
console.log(sortedWebTechs);

const sortedMernStack = mernStack.sort();
console.log(sortedMernStack);

//solution 4

const newArray =[];
for(let i = 0; i < countries.length; i++){
     if(countries[i].includes('land')){
        newArray.push(countries[i])
     }
}
console.log(newArray)

//solution 5
let highestNumberOfCharacters = ''
for(let i = 0; i < countries.length; i++){
    if(countries[i].length > highestNumberOfCharacters.length){
        highestNumberOfCharacters = countries[i];
    }
}console.log(highestNumberOfCharacters);

//solution 6

const newArrays =[];
for(let i = 0; i < countries.length; i++){
     if(countries[i].includes('land')){
        newArrays.push(countries[i])
     }
}
console.log(newArrays);

//solution 7

let countriesWithFourCharacters = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].length !== 4){
        console.log('counties are not below four')
    }else{
        countriesWithFourCharacters.push(countries[i]); 
    }
}
console.log(countriesWithFourCharacters)

//solution 8

let moreThanTwoCharacters = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].length >= 2){
        moreThanTwoCharacters.push(countries[i]);
    }
}
console.log(moreThanTwoCharacters);

//solution 9

const reversedCountries = [];
for(let i = countries.length - 1; i >= 0; i--){
    const capitalizedCountry = countries[i].toUpperCase();
    reversedCountries.push(capitalizedCountry);
}

console.log(reversedCountries);