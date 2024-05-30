class Person {
    constructor(firstName, middleName, lastName) {
      console.log(this) 
      this.firstName = firstName
      this.middleName = middleName
      this.lastName = 'Lamidi'
    }

    familyDetails(){
        console.log(`${this.firstName}, ${this.middleName}, ${this.lastName}`)
    }
  }
  
  const person1 = new Person('Khayrah', 'Bisola', '')
  const person2 = new Person('Morufat', 'Kajogbola', '')
  const person3 = new Person('Risqot', 'Olayinka', '')
  const details = [person1, person2, person3]
  
  console.log(person1)
  console.log(person2)
  console.log(person3)
  details.forEach((person) => person.familyDetails());

  class Details{
    constructor(firstName, middleName, lastName){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName
    }

    getFullDetails(){
        const fullDetails = this.firstName + ' ' + this.lastName
        return fullDetails
    }
  }

  const firstPerson = new Details('Morufat', 'Kajogbola', 'Lamidi')

  console.log(firstPerson.getFullDetails())
  console.log(firstPerson.middleName)

  //the get method: The getter method allow us to access value from the object. We write a getter method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value. 

  class Food{
    constructor(fruits, nuts){
        this.fruits = ['Apple', 'Guava', 'PineApple, Orange']
        this.nuts = ['Groundnuts', 'Cashew', 'Pistachios', 'Pecans']
    }

    get getFruits(){
        return this.fruits
    }
  }

  const foodDetails = new Food('', '')
  console.log(foodDetails)
  console.log(foodDetails.getFruits)


  //the setter method: The set method allow us to modify the value of certain properties. A setter method is written using the keyword set followed by a function.

  class Country{
    constructor(country, capital){
        this.country = country
        this.capital = capital
    }

    set setCapital(capital){
        this.capital = capital
    }
  }

  const nigeria = new Country('Nigeria', 'Abuja');
  const unitedStates = new Country('United States', 'Washington, D.C');
  const france = new Country('France', 'Paris');
  const japan = new Country('Japan', 'Tokyo');

  console.log(nigeria)
  nigeria.setCapital = 'Lagos';
  console.log(nigeria)
  console.log(unitedStates)
  console.log(france)
  console.log(japan)


  //static method : This is when we assign a method to the class as a whole. 





 






  