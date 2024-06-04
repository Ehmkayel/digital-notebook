//solution 1

const studentObject = {
    firstName: 'Risqot',
    lastName: 'Lamidi',
    age: 23,
    skills: ['Reading', 'Baking', 'Writing'],
    country: 'Nigeria',
    enrolled: false
}

const StudentJSON = JSON.stringify(studentObject)
localStorage.setItem('studentObject', StudentJSON)
console.log(localStorage)