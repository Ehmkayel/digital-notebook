//solution 1

const userAge = parseInt(prompt('Enter your age:'));
if (userAge >= 18) {
    console.log('You are old enough to drive.');
} else {
    const yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to drive.`);
}

//solution 2
const myAge = '20';
const yourAge = parseInt(prompt('Enter your age:'))
if(myAge > yourAge){
    console.log(`I am ${myAge - yourAge} older than you`)
}else{
    console.log(`you are ${yourAge - myAge} older than me`)
}

//solution 3
let a = 4;
let b = 3;
if(a > b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${b} is greater than ${a}`)
}

const dataGiven = (a > b)
? console.log(`${a} is greater than ${b}`) 
: console.log(`${b} is greater than ${a}`);

//solution 4
const user = parseInt(prompt('Enter a number: '));
console.log(user);
if(user % 2 === 0){
    console.log(`${user} is an even number`);
}else{
    console.log(`${user} is an odd number`);
}



