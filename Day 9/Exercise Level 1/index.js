//solution 1
function myFullName(){
    console.log('Lamidi Morufat Kajogbola')
}
myFullName()

//solution 2

function fullName(firstName, lastName){
    firstName = 'Morufat';
    lastName = 'Lamidi';
    return `${firstName} ${lastName}`
}
console.log(fullName())

//solution 3
function addNumbers(firstNumber, SecondNumber){
    firstNumber = 50;
    SecondNumber = 100;
    sum = firstNumber + SecondNumber
    console.log(sum)
}

addNumbers()

//solution 4
function areaOfTriangle(){
    let length = 20;
    let width = 15;
    let area =  length * width;
    console.log(area)
    
}

areaOfTriangle()

//solution 5
function perimeterOfRectangle(){
    let length = 300;
    let width = 100;
    let perimeter = 2 * (length + width);
    console.log(perimeter)
}

perimeterOfRectangle()

//solution 6
function volumeOfRectPrism(){
    let length = 20;
    let width = 28;
    let height = 500;
    let volume = length * width * height;
    console.log(volume)
}

volumeOfRectPrism()

//solution 7

function areaOfCircle(π = 3.12, r = 10){
    let area = π * r * r;
    return area;
}

console.log(areaOfCircle())

//solution 8

function circumOfCircle( π, r){
    let circumference = 2 *π *r
    return circumference;
}

console.log(circumOfCircle(3.14, 20))

//solution 9

function densityOfSubstance(mass, volume){
    let density = mass / volume;
    return density;
}

console.log(densityOfSubstance(30, 200))

//solution 10

function speedOfAMovingObject(){
    let totalDistanceCovered = 3000;
    let totalTimeTaken = 24;
    speed = totalDistanceCovered / totalTimeTaken
    console.log(speed)
}

speedOfAMovingObject()

//solution 11

function weightOfSubstance(mass = 20, gravity = 10){
    weight = mass * gravity;
    return weight;
}

console.log(weightOfSubstance());

//solution 12

function convertCelsiusToFahrenheit(oC){
    let oF = (oC * ( 9 / 5))
    return oF;
}

console.log(convertCelsiusToFahrenheit(100));

//solution 13
 
function bmiCalculator(weightInKg, heightInM) {
    let bmi = weightInKg / (heightInM * heightInM);
    
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log(bmiCalculator(70, 1.75));


//solution 14
function checkSeason(month) {
    switch (month) {
        case 'december':
        case 'january':
        case 'february':
            return 'Winter';
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
        case 'september':
        case 'october':
        case 'november':
            return 'Autumn';
        default:
            return 'Invalid month';
    }
}

console.log(checkSeason('december')); 

//solution 15

function findMax(a, b, c){
    let max = b;
    if(a > max){
        max = a;
    }

    if(c > max){
        max = c;
    }
    return max

}

console.log(findMax(0, 10, 5)); 
console.log(findMax(0, -10, -2));









