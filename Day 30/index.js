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
  