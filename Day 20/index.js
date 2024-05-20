//destructuring arrays
const myNames = ['Lamidi', 'Morufat', 'Kajogbola'];
let [firstName, middleName, LastName] = myNames
console.log(firstName, LastName)

const values = [1, 2, 3, 3.2, -4, 0];
let [firstValue, secondValue, thirdValue, fourthValue, fifthValue, sixthValue] = values
//this will print out the first and fifth value
console.log(firstValue, fifthValue)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  //this will print out only the frontend
  console.log(frontEnd)
  //this will print out only the backend
  console.log(backEnd)
  //this will print out both the frontend and the backend
  console.log(frontEnd, backEnd)

//If we like to skip one of the values in the array we use additional comma. The comma helps to omit the value at that specific index
const numbers = [1, 2, 3]
let [numOne, , numThree] = numbers //2 is omitted
console.log(numOne, numThree)

//We can use default value in case the value of array for that index is undefined:
const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) 

//we can also use spread operator if we don't want to assign value to the rest

const fruits = ['Apple', 'Guava', 'PineApple', 'Mango', 'Star-Apple'];
let [firstFruit, secondFruit, ...rest] = fruits
//this will print out the fruits minus the firstFruit(Apple) and the secondFruit(Guava)
console.log(...rest)
//this will print out only the firstFruit
console.log(firstFruit);
//this will print out the all the fruits omitting the second fruits
console.log(firstFruit, ...rest)

//destructuring object

const details = {
    userName : 'Ramadan',
    age : 10,
    bestFood: 'beans'
}
//Destructure the object to get the values for userName, age, and bestFood
let { userName, age, bestFood } = details
//log the value of userName and bestFood to the console
console.log(userName, bestFood)

//Renaming during structuring

// Define an object representing a rectangle with width, height, and area properties
const rectangle = {
    width: 50,
    height: 20,
    area: 2000
  };
  
  // Destructure the rectangle object, renaming properties for readability
  //  width -> w
  //  height -> h
  //  area -> a
  //  perimeter is not defined in the object, so it will be undefined. 
  let { width: w, height: h, area: a, perimeter: p } = rectangle;
  
  // Log the values of the renamed variables to the console
  console.log(w, h, a, p);

//destructuring an object 

// Define an object representing a rectangle with width and height properties
const rect = {
    width: 20,
    height: 10
  };
  
const calculatePerimeter = ({ width, height }) => {
    // Destructure the input object to extract the width and height properties
    // This directly accesses the properties within the object without needing to use 'object.property' notation
    
    // Calculate the perimeter using the width and height that was extracted above
    return 2 * (width + height); 
  };

  // Call the calculatePerimeter function, passing the rect object as an argument
  console.log(calculatePerimeter(rect)); 