//solution 1

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let maximumNumberOfSkills = 0;
  let userWithTheMaxSkills = ''
  
  for (const user in users) {
    const numberOfSkills = users[user].skills.length;
    if (numberOfSkills > maximumNumberOfSkills) {
      maximumNumberOfSkills = numberOfSkills;
      userWithTheMaxSkills = user;
    }
  }

  console.log(`The maximum number of skill is ${maximumNumberOfSkills}`)
  console.log(`The user with many skills is: ${userWithTheMaxSkills}`);

  //solution 2

  let numberOfUsers = 0;

  for (const user in users) {
    const loggedInUsers = users[user]
    if (loggedInUsers.isLoggedIn) {
      numberOfUsers++;
    }
  }

  console.log(`The number of users that are loggedin is: ${numberOfUsers}`)

  //solution 3

  let greaterThanFifty = 0;
  for(const user in users){
    if(users[user].points >= 50){
        greaterThanFifty++
    }
  }

  console.log(`Users with points greater than 50 or equal to is: ${greaterThanFifty}`)

  //solution 4

  let mernStackDevelopers = 0;
  let mernStack = ['MongoDB', 'Express', 'React', 'Node']

  for(const user in users){
    const userSkills = users[user].skills
    let userMernSkills = true; 
    for (const skill of mernStack) {
      if (!userSkills.includes(skill)) {
        userMernSkills = false; 
        break; 
      }
    }
    if(userMernSkills){
        mernStackDevelopers++
    }
  }

  console.log(`The number of MERNStack Developers: ${mernStackDevelopers}`)


  //solution 4

  let userDetail = Object.assign(users);
  userDetail.Ramadan = {
    email: 'lamidimorufat0@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'TailwindCss', 'Bootstrap', 'React'],
    age: 25,
    isLoggedIn: true,
    points: 60
  }
  console.log(userDetail)
  console.log(userDetail.Ramadan)

  //solution 5

  let allKeys = Object.keys(users);
  console.log(allKeys);

  //solution 6

  const values = Object.values(users);
  console.log(values)

 //solution 7

 const countries = {
    Nigeria: {
        capital: 'Lagos',
        populations : '218.5 million',
        languages : ['English', 'Yoruba', 'Hausa', 'Igbo']

    },

    UnitedStates: {
        capital: 'Washington D.C.',
        populations: '333 million',
        languages: ['English', 'Spanish']


    },

    Egypt: {
        capital: 'Cairo',
        populations: '111 million',
        languages: ['Arabic']
    }
 }

 console.log(countries)
  