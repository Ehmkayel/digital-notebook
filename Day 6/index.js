//Array can be created using constructor or square bracket
//using constructor
const fruit = Array();
console.log(fruit);

//using bracket
const fruits = ['pineapple', 'guava', 'mango', 'apple'];
console.log(fruits);
console.log(fruits.length);

const codingDays = ('Day1, Day2, Day3, Day4, Day5');
console.log(codingDays.split(','))

const values = [25, 9, 12, 11, 100, 50];
console.log(values);
console.log(values.length); 
console.log(values[3]);      //  -> 0
console.log(values[1]);      //  -> 100
const lastIndex = values.length - 1
console.log(values[lastIndex]) ;

//Array is mutable, i.e it can be modified

const foods = ['beans', 'rice', 'pasta', 'noodles', 'yam', 'potato'];
foods[4] = 'jollof';
console.log(foods);

const fillWithValues = Array(9).fill('Ramadan');
console.log(fillWithValues);

const names = ['Ramadan', 'Aisha', 'Sidiqoh', 'Risqot', 'Khayra'];
const statesOfResidence = ['Lagos', 'Abuja', 'Kaduna', 'Kano', 'Osun'];
const namesAndStatesOfResidence = names.concat(statesOfResidence);
console.log(namesAndStatesOfResidence);
console.log(names.indexOf('Aisha'));

const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) 

const number = 100
console.log(Array.isArray(number));

const cities = ['Port Harcourt', 'Umuahia', 'Yola', 'Ilorin'];
console.log(cities.toString());
console.log(cities.join());

const digits = [1, 2, 3, 4, 5];
digits.splice();
console.log(digits);
digits.push(20);
console.log(digits);
digits.pop();
console.log(digits);
     


