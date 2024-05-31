//solution 1

class Dog extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs);
    }

    animalDetails() {
        console.log(`This is a dog named ${this.name}.`);
    }
}

const dog = new Dog('Alex', 3, 'yellow', 4);
dog.animalDetails(); 

class Cat extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs);
    }

    animalDetails() {
        console.log(`This is a cat named ${this.name}.`);
    }
}

const cat = new Cat('Layla', 5, '', '');
cat.animalDetails(); 
