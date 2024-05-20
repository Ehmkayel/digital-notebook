const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

    //solution 1
    //Iterate over each user object in the 'users' array using a for...of loop and Destructure each user object to get its name, scores, skills, and age properties
    for(const {name, scores, skills, age} of users){
    //log the assigned values to the console
        console.log(name, scores, skills, age)
    }

    //solution 2
    //Iterate over each user object in the 'users' array using a for...of loop and Destructure each user object to get its name, and skills 
    for(const {name, skills} of users){
    //check if the user has less than 2 skills 
        if(skills.length < 2){
        //log the below message to the console if the user skill is less than 2
            console.log(`The user with the skills less than 2 is ${name}`)
        }else{
            //log the below message to the console if no user has less than two skills
            console.log('All users have more than two skills')
        }
    }