//solution 1
//define an array of constants
const constants = [2.72, 3.14, 9.81, 37, 100];
//// Destructure the constants array, assigning values to variables 
// This maps the array elements to specific variables:
// e = 2.72, pi = 3.14, gravity = 9.81, humanBodyTemp = 37 and waterBoilingTemp = 100
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// Log the values of the assigned variables to the console
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)


//solution 2
//define an array of country
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
//Destruction the array with the below names
//fin = finland, est = Estonia, sw = Sweden, den = Denmark and nor = Norway
let [fin, est, sw, den, nor] = countries
//log the values of the assigned variables to the console
console.log(fin, est, sw, den, nor)

//solution 3
//define an object of rectangle
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  //destructure the object by renaming the properties. width = w, height = h, area = a, and perimeter = p
let { width: w, height: h, area: a, perimeter: p} = rectangle;
//log the values of the assigned variables to the console
console.log(w,h,a,p)


