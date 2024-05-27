//solution 1

const userSkills = {
    technicalSkills: ['HTML', 'CSS', 'TAILWINDCSS', 'JAVASCRIPT'],
    softSkills: ['COMMUNICATION', 'PROBLEM-SOLVING', 'ANALYTICAL'],
    tools: ['GIT', 'GitHub', 'Visual Studio Code', 'Figma']
}

//for loop
 
console.time('for loop');
const keys = Object.keys(userSkills); 
for (let i = 0; i < keys.length; i++) {
    const key = keys[i]; 
    console.log(userSkills[key]); 
}
console.timeEnd('for loop');


//for of loop

console.time('for of loop')
for (const key of Object.keys(userSkills)) {
    const skills = userSkills[key];
    console.log(skills);
    for (const skill of skills) {
        console.log(skill);
    }
}
console.timeEnd('for of loop')

//while loop

console.time('while loop');
const userSkillsValues = Object.values(userSkills);
let i = 0;
while (i < userSkillsValues.length) {
    const skills = userSkillsValues[i];
    let j = 0;
    while (j < skills.length) {
        console.log(skills[j]);
        j++;
    }
    i++;
}
console.timeEnd('while loop');

//forEach loop

console.time('forEach loop');
Object.values(userSkills).forEach((skills) => {
    console.log(skills);
});
console.timeEnd('forEach loop');





