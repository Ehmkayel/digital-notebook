//solution 1

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const totalPrice = products.filter((product) => typeof product.price === 'number').map((product) => (product.price)).reduce((total, price) => total + price, 0);
  console.log(totalPrice)


//solution 2

let sum = 0;
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  if (typeof product.price === 'number') {
    sum += product.price;
  }
}
const sumOfPriceOfProducts = [sum].reduce((total, price) => total + price, 0);
console.log(sumOfPriceOfProducts);

//solution 3

const countries = ['Afghanistan', 'Albania', 'Andorra', 'Antarctica', 'Estonia', 'Aruba', 'Bahamas', 'Bangladesh', 'Cameroon', 'Eritrea', 'Urguay','Finland', 'Sweden']
function categorizeCountries(pattern){
    const commonPattern = countries.filter((country) => country.toLowerCase().includes(pattern))
    return commonPattern;

}
console.log(categorizeCountries('tica'))

//solution 4

function countStartingLetters(countries) {
    const numbersToCount = {};
    for (const country of countries) {
        const firstValue = country[0].toLowerCase();
        if (!numbersToCount[firstValue]) {
            numbersToCount[firstValue] = 0;
        }
        numbersToCount[firstValue]++;
    }

    const letterCountsArray = [];
    for (const letter in numbersToCount) { 
        letterCountsArray.push({
            letter,
            count: numbersToCount[letter],
        });
    }

    return letterCountsArray;
}

console.log(countStartingLetters(countries));

//solution 5

function getFirstTenCountries(countries) {
    return countries.slice(0, 10);
  
  }
  console.log(getFirstTenCountries(countries));

  const mapCountries = countries.map((country) => country.slice(0, 10));
  console.log(mapCountries)

  const everyCountries = countries.every((country) => typeof country === 'string')
  console.log(everyCountries)

  const findCountry = countries.find((country) => country.length > 5)
  console.log(findCountry)

  const findIndexCountry = countries.findIndex((country) => country.length > 5)
  console.log(findIndexCountry)

//solution 6

function getLastTenCountries() {
    const lastTen = [];
    let firstIndex = 0;

    if (countries.length > 10) {
        firstIndex = countries.length - 10;
    }

    for (let i = firstIndex; i < countries.length; i++) {
        lastTen.push(countries[i]);
    }

    return lastTen;
}


//solution 7
const letterCounts = countries.reduce((counts, country) => {
    const initialLetter = country[0];
    counts[initialLetter] = (counts[initialLetter] || 0) + 1;
    return counts;
  }, {});
  
  let mostCommonLetter = "";
  let maxCount = 0;
  Object.keys(letterCounts).map(letter => {
    if (letterCounts[letter] > maxCount) {
      mostCommonLetter = letter;
      maxCount = letterCounts[letter];
    }
  });
  
  console.log(mostCommonLetter);
  

 