//solution 1

class Animal{
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs
    }

    animalDetails(){
        console.log(`The name of my animal is ${this.name}, she is ${this.age} years old, she's ${this.color} in color and has ${this.legs} legs`)

    }

    get getDetails(){
        return this.name
    }

    set setName(name){
        this.name = name;   
    }

    getAnimalDetails(){
        let name = this.animalDetails()
        if(this.name.length > 4){
            console.log('The name is greater than 4')
        }
    }

    static compareAnimalsDetails(firstAnimal, secondAnimal){
        if(firstAnimal.age > secondAnimal.age){
            return `${firstAnimal.name} is older than ${secondAnimal.name}`
        }else if(firstAnimal.age < secondAnimal.age){
            return `${secondAnimal} is older than ${firstAnimal.name}`
        }else {
            return `Both animals are of the same age`
        }

    }

}

const animalInfo = new Animal('Bella', 6, 'Black', 4)
const secondAnimal = new Animal('Layla', 3, 'White', 4)

console.log(animalInfo)
animalInfo.animalDetails()
console.log(animalInfo.getDetails)
secondAnimal.setName = 'Quartz';
console.log(secondAnimal)
animalInfo.getAnimalDetails()
console.log(Animal.compareAnimalsDetails(animalInfo, secondAnimal))



//solution 2

class Dog extends Animal{
    add(){
        console.log(`The dog name is ${this.name}, he is ${this.age} and his color is ${this.color} with ${this.legs} legs`)
    }
}

const dog = new Dog('Alex', '3', 'yellow', '4')
dog.add()

class Cat extends Animal{
    getCatInfo(){
        console.log(`The cat name is ${this.name}, she is ${this.age}`)
    }
}

const cat = new Cat('Layla', 5, '', '')
cat.getCatInfo()




