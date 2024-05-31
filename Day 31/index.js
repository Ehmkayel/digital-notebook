// how to create a children class using inheritance

class Food{
    constructor(fruits, nuts, vegetables){
        this.fruits = ['Apple', 'Guava', 'PineApple, Orange']
        this.nuts = ['Groundnuts', 'Cashew', 'Pistachios', 'Pecans']
        this.vegetables = vegetables
    }

    get getFruits(){
        return this.fruits
    }
  }

  const foodDetails = new Food('', '', 'Tomato')
  console.log(foodDetails)
  console.log(foodDetails.getFruits)

  class Vegetables extends Food{
    addVegatables(){
        console.log(`Time to add ${this.vegetables} to the food class`)
    }
  }

  const vegetable = new Vegetables( '', '', 'peanut')
  vegetable.addVegatables()
