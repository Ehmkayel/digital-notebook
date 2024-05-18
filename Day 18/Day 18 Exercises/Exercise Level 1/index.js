//solution 1

const emptySet = new Set ();
console.log(emptySet)

//solution 2

let loopSet = new Set ()
for (let i = 0; i <= 10; i++) {
    loopSet.add(i);
}
console.log(loopSet);

//solution 3

const myNames = ['Ramadan', 'Lamidi', 'Morufat', 'Love']
let deleteElement = new Set(myNames)
console.log(deleteElement.delete('Love'))

//solution 4

deleteElement.clear();
console.log(deleteElement)

//solution 5

const array = ['Apple', 'Guava', 'Mango', 'Cashew', 'PineApple', 'Star-Apple', 'Orange'];
const setOfFiveStrings = new Set(array.slice(0, 5))
console.log(setOfFiveStrings)
