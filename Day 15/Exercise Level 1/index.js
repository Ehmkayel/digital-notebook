//solution 1

//forEach: This is use to iterate over an array elements, it takes a callback function (element, index, parameter) and array itself

//while

//map: It iterate an array elements and modify the elements. It takes a callback function (element, index, array parameter) and returns a new array

//while

//filter: This filters an element based on the condition that was given and returns new array

//while

//reduce: It takes a callback function, an accumulator, a current and optional initial value as a parameter and returns a single value 

//solution 2

function callback(element, index, arr ) {
    console.log(index, element, arr);
}

//solution 3

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const results = countries.forEach((country) => {
    console.log(country)
});

//solution 4

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const printNames = names.forEach((name) => {
    console.log(name)
})

//solution 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const printNumbers = numbers.forEach((number)=>{
    console.log(number)
})

//solution 6

const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

//solution 7

const countriesLength = countries.map((country)=> country.length)
console.log(countriesLength)

//solution 8

const numberToSquare = numbers.map((number) => number * number)
console.log(numberToSquare)

//solution 9

const nameToUppercase = names.map((name) => name.toUpperCase())
console.log(nameToUppercase)

//solution 10

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

const correspondingPrice = products.map((product) => `${product.product}: ${product.price}`) 
console.log(correspondingPrice)

//solution 11

const countriesWithLand = countries.filter((country) => country.includes('Land'))
console.log(countriesWithLand)

//solution 12

const countriesCharacters = countries.filter((country) => country.length === 6)
console.log(countriesCharacters)

//solution 13

const countriesWithSixCharactersAndMore = countries.filter((country) => country.length >= 6)
console.log(countriesWithSixCharactersAndMore)

//solution 14

const countriesStartWithE = countries.filter((country) => country.startsWith('E'))
console.log(countriesStartWithE)

//solution 15

const pricesWithValues = products.filter((product) => {
    let productWithValue = product.price !== '' && product.price !== ' ';
    return productWithValue;
});
console.log(pricesWithValues);

//solution 16

function getStringLists(array){
    let filteredArray = array.filter((array) => typeof(array) === 'string');
    return filteredArray
    
}
let array = ['Ramadan', 4, 'Lamidi', users = {
    name: 'Lamidi',
    age: 20,
    school: 'Obafemi Awolowo University'
}]

console.log(getStringLists(array))

//solution 17

const sum = numbers.reduce((totalValue, number) => totalValue + number);
console.log(sum);

//solution 18

const sentence = countries.reduce((string, country, index) => {
    if (index === countries.length - 1) {
        return string + 'and ' + country;
    } else {
        return string + country + ', ';
    }
}, '') + ' are north European countries.';

console.log(sentence);

//solution 19

//every: This check if all the elements are similar in one aspect, it returns boolean

//while

//some: This checks if some of the elements are similar in one aspect, it returns boolean

//solution 20

const someNames = names.some((name) => name.length > 7)
console.log(someNames)

//solution 21

const everyCountries = countries.every((country) => country.includes('Land'))
console.log(everyCountries)

//solution 22

//find: It returns the first element that satisfies the condition that was given

//while

//findIndex: It returns the position of the first element that satisfies the condition that was given 

//solution 23

const findCountriesWithSixLetters = countries.find((country) => country.length === 6)
console.log(findCountriesWithSixLetters)

//solution 24

const positionOfCountryWithSixLetters = countries.findIndex((country) => country.length === 6)
console.log(positionOfCountryWithSixLetters)

//solution 25

const positionOfNorway = countries.findIndex((country) => country === 'Norway')
console.log(positionOfNorway)

//solution 26

const positionOfRussia = countries.findIndex((country) => country === 'Russia')
console.log(positionOfRussia)

