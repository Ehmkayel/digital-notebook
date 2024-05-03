console.log(8 > 3);  // true
console.log(3 >= 2); // true
console.log(7 < 5); // false
console.log(5 < 3); // false
console.log(2 <= 3); // true
console.log(12 == 9); // false
console.log(3 != 2); //true
console.log(9 == '5'); // true, compare only value
console.log(3 === '3'); // false, compare both value and data type (=== strict equality)
console.log(3 !== '3'); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false) ;  // true
console.log(0 === false); // false
console.log(0 == ''); // true
console.log(0 == ' ');// true, 
console.log(0 === ''); // false, 
console.log(1 == true); //true


let count = 25;
console.log(count);
console.log(++count);
console.log(count++);
console.log(--count);
console.log(count--);

alert('My name is Lamidi Kajogbola Morufat');
let school = prompt('The name of school is:', '');
confirm('is the name of your school Obafemi Awolowo University ?')

const present = new Date();
console.log(present);
console.log(present.getFullYear());
console.log(present.getMonth());
console.log(present.getDate())
console.log(present.getDay());
console.log(present.getTime());
console.log(present.getHours());
console.log(present.getMinutes());
console.log(present.getSeconds());

const year = present.getFullYear();
const month = present.getMonth();
const date = present.getDate();
const day = present.getDay();
const time = present.getTime();
const hour = present.getHours();
const minutes = present.getMinutes();
const seconds = present.getSeconds();

console.log(`The year ${year}, Month ${month}, Date ${date}, Day ${day}, Time ${time}, Hour ${hour}, Minutes ${minutes}, Seconds ${seconds}, is my birthday`)

 