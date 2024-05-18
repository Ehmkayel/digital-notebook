//creating a new set 

const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)


  //adding an element to a set
  const techStacks = new Set()
  console.log(techStacks.size);
  //add an element to the techStack set
  techStacks.add('JavaScript');
  techStacks.add('Tailwind');
  techStacks.add('React');
  techStacks.add('HTML');
  techStacks.add('Css');
  console.log(techStacks.size); //this will display the number of techStacks added to the techStacks variable, the answer is going to be 5
  console.log(techStacks) //this will display all the techStacks

//using loop to add an element to a set

const fruits = ['Apple', 'Guava', 'Paw-paw', 'Mango', 'Cashew'];
let setOfFruits = new Set();
for(const fruit of fruits){
    setOfFruits.add(fruit)
}
console.log(setOfFruits)

//deleting and element from a set
console.log(setOfFruits.delete('Mango'));
console.log(setOfFruits.size)

//To check an element in a set, you use the has method
console.log(setOfFruits.has('Cashew'));
console.log(setOfFruits.has('Star-Apple'));

//To clear the elements in a set, you use the clear method
setOfFruits.clear();
console.log(setOfFruits.size)

// To print out the number of unique values in an array
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)
console.log(setOfNumbers)

//union of sets, this can be achieved using spread operator

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)


 