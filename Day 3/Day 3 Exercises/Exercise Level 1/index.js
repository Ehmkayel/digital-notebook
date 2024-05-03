//solution 1
const firstName = 'Risqoh';
const lastName = 'Lamidi';
const country = 'Kenya';
const city = 'Abuja';
const age = '5';
const isMarried = 'married';
const yearVariable = 2024;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof yearVariable);

//solution 2
const string = '10'
console.log(typeof string == 10);

//solution 3
const floatingNumber = parseInt('9.8');
console.log(typeof floatingNumber == 10);

//solution 4
console.log(10 > 5);
console.log(34 > 12);
console.log(15 < 20);
console.log(20 === 4 );
console.log( 5 === "5");
console.log( 10 <= 2);

//solution 5

4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false

console.log(4 > 3);
console.log(4 >+ 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log( 4 != 4);
console.log(4 !== 4);
console.log( 4 != '4');
console.log( 4 == '4');
console.log(4 === '4');
// Find the length of python and jargon and make a falsy comparison statement.
const course ='python';
const word = 'jargon';
console.log(course.length);
console.log(word.length);
console.log(word > course);

//solution 6
4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12  //false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 //true
!(4 > 3) // false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) // true
!(4 === '4') //true

console.log(4 > 3 && 10 < 12 );
console.log(4 > 3 && 10 > 12 );
console.log(4 > 3 || 10 < 12 );
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3 ));
console.log(!(4 < 3 ));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12 ));
console.log(!(4 > 3 && 10 > 12) )
console.log(!(4 === '4'));

const animal1 = 'dragon';
const animal2 = 'python';
console.log(!(animal1.includes('on')));
console.log(!(animal1.includes('on')));

//solution 7
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();

console.log(today)
console.log(year)
console.log(month)
console.log(date)
console.log(hours)
console.log(minutes)


