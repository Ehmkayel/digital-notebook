// solution 1
const quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(quote);

//solution 2
const motherTheresaQuote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(motherTheresaQuote);

//solution 3
const string = '10';
console.log(typeof string);
const value = 10;
console.log(typeof parseInt(string) == typeof (value));

//solution 4
const floatingNumber = parseFloat('9.8');
console.log(floatingNumber);
const numberValue = 10;
console.log(floatingNumber == numberValue);
console.log(Math.ceil(floatingNumber) == numberValue);

//solution 5
const course = 'Python';
const word = 'Jargon';
console.log(course.includes('on'));
console.log(word.includes('on'));

//solution 6
const wordFind = 'I hope this course is not full of jargon';
console.log(wordFind.includes('jargon'));

//solution 7
console.log(Math.ceil(Math.random() * 101));

//solution 8
console.log(Math.ceil(Math.random() * (51) + 50)); 

//solution 9
console.log(Math.ceil(Math.random() * 256))

//solution 10
const stringCharacters = 'JavaScript';
const findStringCharactersLength = stringCharacters.length
const generatingRandomNumber = (Math.ceil(Math.random() * findStringCharactersLength));
console.log(generatingRandomNumber);
const randomAccess = stringCharacters[generatingRandomNumber];
console.log(randomAccess);

//solution 11
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

//solution 12
const sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.substr(30, 24));

