//solution 1

const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

const studentsNameAndSkills = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 3);
console.log(studentsNameAndSkills);