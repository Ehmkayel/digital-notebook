// to store data in the local storage,you use the setItem Method

localStorage.setItem('key', 'value')

localStorage.setItem('firstName', 'Morufat')
console.log(localStorage)

//storing number in a local storage

localStorage.setItem('age', 40)
console.log(localStorage)

//Storing an array or object in a localStorage. If we are storing an array, an object or object array, we should stringify the object first. See the example below.

const bestFruits = ['Apple', 'Mango', 'Guava', 'Pineapple']
const bestFruitsJSON = JSON.stringify(bestFruits)
localStorage.setItem('bestFruits',bestFruitsJSON)
console.log(localStorage)

const userDetails = {
    firstName: 'Morufat',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Tailwindcss', 'Bootstrap']
}

const userDetailsJson = JSON.stringify(userDetails)
localStorage.setItem('userDetails', userDetailsJson)
console.log(localStorage)

//To get item from local storage we use getItem()

localStorage.getItem('key')

let age = localStorage.getItem('age')
let skills = localStorage.getItem('skills')
console.log( age, skills)

let skillsObj = JSON.parse(skills)
console.log(skillsObj)

//Clearing the localStorage
//The clear method, will clear everything stored in the local storage

localStorage.clear()