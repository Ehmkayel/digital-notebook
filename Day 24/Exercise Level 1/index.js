// solution 1

//The Regular expression to check digits
const pattern = /\d+/g
//The text given; it contains the information for the total Income
const text = "Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
//Extract the values with regex
const values = text.match(pattern)
//use reduce to some the values extracted
const totalIncome = values.reduce((sum, value) => sum + parseInt(value), 0);
const result = `The total Annual Income is ${totalIncome}`
//print out the result to the console
console.log(result);


//solution 2

const thePattern = /(?:0|4|8)/g;
//data given
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// Filter points array for numbers matching the pattern
const pointsMatch = points.filter((point) => point.match(thePattern));
// Convert matched points to integers and sort them
const sortedPoints = pointsMatch.map(Number).sort((a, b) => a - b);
// Find the maximum points using Math.max
const maximumPoint = Math.max(...sortedPoints);
//finds the minimum points using Math.min
const minimumPoint = Math.min(...sortedPoints);
//check the distance from the maximum point and the minimum point
const distance = maximumPoint - minimumPoint;
//print the difference between the maximum and minimum point to the console
console.log(`The distance between the furthest particles is: ${distance}`);

//solution 3

//The Regular Expressions Pattern to validate strings
const thePatterns = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
//function to check if a string is valid according to the pattern
function stringIsValid(variable){
    //check if the string matches the pattern using the test object method
    return thePatterns.test(variable)
}
console.log(stringIsValid('first_name'));
console.log(stringIsValid('first-name'));
console.log(stringIsValid('first-name'));
console.log(stringIsValid('firstname'));



