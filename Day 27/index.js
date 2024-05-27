// 
console.log('I am currently enhancing my skills with 30 Days of JavaScript')

//using css
console.log('%cI am currently enhancing my skills with 30 Days of JavaScript', 'color:red') 

console.log('%cJavaScript can be%c %cChallenging%c but with resilience and consistency %cYou will scale through it%c', 'color: green', '', 'color: red', '', 'color: yellow', '')

//console.warn() : This is use to give warning on browser, to inform about the deprecation of a package version or bad practices

console.warn('This is a warning, kindly check the version and update')
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

//console.error(): This shows an error message to the console

console.error('you have made a mistake')

//console.table(): This method is use to display data as a table on the console. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

let names = ['Lamidi', 'Risqat', 'Khayrat', 'Morufat']
console.table(names)

//using object : This creates table with two columns:an index column containing the keys and a value column contain the values of the object.
const userDetails = {
    name: 'Lamidi',
    age: 19,
    school: 'Obafemi Awolowo University',
    location: 'Kano'
}

console.table(userDetails)

let countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

  let users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)

  //console.time(): Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

  const userNames = [
    ['Lamidi', 'Morufat', 'Kajogbola'],
    ['Kajogbola', 'Lamidi', 'Morufat'],
    ['Risqot', 'Khayrat', 'Lamidi']
  ]
  console.time('Regular for loop')

  for(let i = 0; i < userNames.length; i++){
    console.log(userNames[i])

  }
  console.timeEnd('Regular for loop')

  console.time('for of loop')
  for(const [firstName, middleName, lastName] of userNames){
    console.log(firstName, middleName, lastName)
  }

  console.timeEnd('for of loop')


  console.time('forEach loop')
  userNames.forEach(([firstName, middleName, lastName]) => {
    console.log(firstName, lastName, middleName)

  })
  console.timeEnd('forEach loop')

  const countriess = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countriess.length; i++) {
    console.log(countriess[i][0], countriess[i][1])
  }
  console.timeEnd('Regular for loop')

  //console.info(): This displays information on the console

  console.info('I love how my consistency in coding is helping in enhancing my skills')

  //console.assert() : The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.

  console.assert(25 === 3) //it's force so an error message will be log to the console
  console.assert(10 < 25, '10 is less than 25') //since it is true no error message will be log to the console

  //console.group(): This is use to group different log group

    names = ['Asabeneh', 'Brook', 'David', 'John']
    countries = [
     ['Finland', 'Helsinki'],
     ['Sweden', 'Stockholm'],
     ['Norway', 'Oslo']
    ]
    const user = {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    }
users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()


//console.count(): This prints the number of times it's called to the console. It takes a string label parameter. It is very helpful to count the number of times a function is called

function calledFunction(){
    console.count('The function has been called: ')
}

calledFunction()
calledFunction()
calledFunction()
calledFunction()
calledFunction()

//console.clear() : This is used to clear the console