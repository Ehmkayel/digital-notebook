//To define a class in JavaScript we need the keyword class , the name of a class in CamelCase and block code(two curly brackets). Let us create a class name Person.

// syntax
class ClassName {
    //  code goes here
}

//class instantiation

class Person {

}

let person = new Person();
console.log(person)

//class constructor

class Details{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    displayDetails(){
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
    }
   
}

const firstDetails = new Details ('Ramadan Lamidi', 23)
firstDetails.displayDetails()