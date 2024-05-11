//solution 1

let dog = {

}

//solution 2
console.log(dog)

//solution 3
 dog = {
    name: 'Bella',
    legs: 4,
    color: 'white',
    age: 5,
    bark: function() {
        return 'woof woof';
      },

}

//solution 4

let nameOfDog = dog.name;
let legsOfDog = dog.legs;
let colorOfDog = dog.color;
let ageOfDog = dog.age;
let dogBark = dog.bark;

console.log(`The name of the dog is ${nameOfDog} she has ${legsOfDog} legs and her color is ${colorOfDog}, she's ${ageOfDog} years old, and loves barking like ${dogBark()}`)

//solution 5

dog.breed = 'caucasian';
dog.getDogInfo = function (){
    return `${this.name} is a ${this.breed} with ${this.legs} legs and her color is ${this.color}. She is ${this.age} years old, and loves barking like ${dogBark()}.`
}
console.log(dog.getDogInfo())