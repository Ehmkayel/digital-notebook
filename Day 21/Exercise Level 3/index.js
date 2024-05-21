//solution 1

// Array of objects representing countries with their details
const countries = [
    { name: 'Afghanistan', capital: 'Kabul', languages: ['Pashto', 'Uzbek', 'Turkmen'], population: 27657145, },
    { name: 'Åland Islands', capital: 'Mariehamn', languages: ['Swedish'], population: 28875, },
    { name: 'Albania', capital: 'Tirana', languages: ['Albanian'], population: 2886026, },
    { name: 'Algeria', capital: 'Algiers', languages: ['Arabic'], population: 40400000, },
    { name: 'American Samoa', capital: 'Pago Pago', languages: ['English', 'Samoan'], population: 57100, },
    { name: 'Andorra', capital: 'Andorra la Vella', languages: ['Catalan'], population: 78014, },
    { name: 'Angola', capital: 'Luanda', languages: ['Portuguese'], population: 25868000, },
    { name: 'Anguilla', capital: 'The Valley', languages: ['English'], population: 13452, },
    { name: 'Antigua and Barbuda', capital: "Saint John's", languages: ['English'], population: 86295, },
 
]
//Loop through each country object in the array using the for of loop and destructure each country object to get its name, capital, languages and population
for(const {name, capital, languages, population} of countries){
    //a string containing the details of the countries
    let theCountryDetails = `country: ${name}, capital: ${capital} , languages: ${languages}, population: ${population}`
    //print the result to the console
    console.log(`The details of the country includes: ${theCountryDetails}`)
}

//solution 2

// Array representing student information with name, skills, and scores
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// Destructure the student array into individual variables: name, skills, scores 
let [name, skills, scores] = student;
// Destructure the scores array into individual variables: htmScore, cssScore, jsScore, reactScore
let [htmScore, cssScore, jsScore, reactScore] = scores;
//print the name, skills, jsScore and reactScore to the console
console.log(name, skills, jsScore, reactScore)


//solution 3

//Array of student data containing name, skills, and scores
  const students = [
     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

// Function to convert the array of student data into an object
function convertArrayToObject(students) {
        // Map each student array to an object by destructuring the student data to name, skills, and scores
        return students.map(([name, skills, scores]) => ({
            name: name,
            skills: skills,
            scores: scores
        }));
    }

// Call the function and print the result to the console
console.log(convertArrayToObject(students));

//solution 4

const studentInfo = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
// Copying the student object to newStudent without mutating the original object
let newStudent = {...studentInfo};
//print the result to the console
console.log(newStudent)
// Destructure the skills object to frontEnd, backEnd, dataBase, dataScience
let {frontEnd, backEnd, dataBase, dataScience} = newStudent.skills
// Add 'Bootstrap' with level 8 to the frontEnd skill set
frontEnd.push({skills: 'Bootstrap', level: 8})
// Add 'Express' with level 9 to the backEnd skill set
backEnd.push({skills: 'Express', level: 9})
// Add 'SQL' with level 8 to the dataBase skill set
dataBase.push({skills: 'SQL', level : 8})
// Add 'SQL' to the dataScience skill set
dataScience.push('SQL')
//print the result to the console
console.log(newStudent)
 







