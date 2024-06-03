//solution 1

const skills = `['HTML', 'CSS', 'JS', 'React','Node', 'Python']`;
const skillsStringify = JSON.stringify(skills);
console.log(skillsStringify)

//solution 2

let age = 250;
const ageStringify = JSON.stringify(age)
console.log(ageStringify)

//solution 3

let isMarried = true
const isMarriedStringify = JSON.stringify(isMarried)
console.log(isMarriedStringify)

//solution 4

const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

const studentStringify = JSON.stringify(student)
console.log(studentStringify)


