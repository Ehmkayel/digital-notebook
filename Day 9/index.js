//declaring a function without a parameter
function functionName() {
    // code goes here
  }
  functionName() // calling function by its name and with parentheses


// function without parameter
function addTwoNumbers() {
    let numOne = 40
    let numTwo = 50
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  
  addTwoNumbers();

  function greetings(name = 'Ramadan') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Lamidi'))

