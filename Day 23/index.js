//creating a pattern with RegExp Constructor
let pattern = /age/
let regEx = new RegExp(pattern)

//Declaring regular expression with global flag, This will check for the patterns in the whole document

let globalPattern = 'love'
let flag = 'g'
let globalRegEx = new RegExp(globalPattern, flag)

//Declaring regular expression with case insensitive flag: This will check the value that match without considering the case, it can be a lowerCase or an upperCase.

let insensitivityPattern = 'love'
let theFlag = 'i'
let insensitiveRegEx = new RegExp(insensitivityPattern, theFlag)

//Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor

let regExObject = new RegExp('love','gi')

//Creating a pattern without RegExp Constructor

let regExp = /love/gi

//using test() object method : This text for a match in a string and it returns boolean(true/false)
const myName = 'Lamidi Morufat Kajogbola';
const thePattern = /Risqoh/;
const result = thePattern.test(myName);
console.log(result)

//using match() Object Method : This returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
//example without the global flag

const string = 'I love revisiting concepts so as to solidify my knowledge'
const stringPattern = /concepts/
const stringResult = string.match(stringPattern)
console.log(stringResult)

//example with global flag

const str = 'I love revisiting concepts so as to solidify my knowledge'
const strPattern = /concepts/g
const strResult = str.match(strPattern)
console.log(strResult)

//using search() Object Method: This tests for a match in a string, it returns the index of the match, or -1 if the pattern is not in it.

const bestFruit = 'Apple and Mango';
const fruitPattern = /and/g;
const fruitResult = bestFruit.search(fruitPattern);
console.log(fruitResult)

let secondFruitPattern = /guava/g;
let secondResult = bestFruit.search(secondFruitPattern)
console.log(secondResult)

//using replace() Object Method: this search for a match in a string and replaces the matched substring with a replacement substring

const note = 'In other to enhance my frontend development skills, I started learning back from JavaScript.\
It has been a wonderful journey, and I am grateful I took the bold step'

const matchReplaced = note.replace(/back|Back/, 'and pushing')
console.log(matchReplaced)

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

let matches = txt.replace(/%/g, '')
console.log(matches)  



