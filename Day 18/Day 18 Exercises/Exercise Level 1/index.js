// Solution 1: Creating an empty Set
const emptySet = new Set();
console.log(emptySet);

// Solution 2: Creating a Set with numbers from 0 to 10
let loopSet = new Set();
for (let i = 0; i <= 10; i++) {
    loopSet.add(i);
}
console.log(loopSet);

// Solution 3: Deleting an element from a Set
const myNames = ['Ramadan', 'Lamidi', 'Morufat', 'Love'];
let deleteElement = new Set(myNames);
console.log(deleteElement.delete('Love'));

// Solution 4: Clearing a Set
deleteElement.clear();
console.log(deleteElement);

// Solution 5: Creating a Set with the first 5 elements of an array
const array = ['Apple', 'Guava', 'Mango', 'Cashew', 'PineApple', 'Star-Apple', 'Orange'];
// Create a Set containing the first 5 elements of the array
const setOfFiveStrings = new Set(array.slice(0, 5));
// Log the set containing the first 5 elements to the console
console.log(setOfFiveStrings);

// Solution 6: Creating a Map with country names and their lengths
let countries = ['United States', 'China', 'India', 'Brazil', 'Russia', 'Japan', 'Germany', 'Indonesia', 'United Kingdom', 'France'];
let mapOfCountries = new Map();

// Populate the map with country names and their lengths
countries.forEach(country => {
    mapOfCountries.set(country, country.length);
});

// Log each country name and its length
mapOfCountries.forEach((length, country) => {
    console.log(`${country} - length: ${length}`);
});
