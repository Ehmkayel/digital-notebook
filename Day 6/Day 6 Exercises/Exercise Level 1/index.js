//solution 1
const emptyArray = Array();
console.log(emptyArray);

//solution 2
const arrayNumberOfElements = [20, 50, 70, 10, 9, 5, 4, 4, 2];

//solution 3
console.log(arrayNumberOfElements.length);

//solution 4
const firstItem = arrayNumberOfElements[0];
const middleItem = arrayNumberOfElements[4];
const lastItem = arrayNumberOfElements[9 -1];
console.log(firstItem);
console.log(middleItem);
console.log(lastItem);

//solution 5
const mixedDataTypes = [
    'Ramada', 'Morufat', 'Lamidi',
    [20, 30, 80],
    2, 3, 5, 6, 10,
    {
        school: 'Obafemi Awolowo University',
        name: 'Ramadan El',
        age: 70,
    },
    false
]
console.log(mixedDataTypes.length);

//solution 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//solution 7
console.log(itCompanies);

//solution 8
console.log(itCompanies.length);

//solution 9
const firstItemOfItCompanies = itCompanies[0];
const middleItemOfItCompanies = itCompanies[3];
const lastItemOfItCompanies = itCompanies[7 -1];
console.log(firstItemOfItCompanies);
console.log(middleItemOfItCompanies);
console.log(lastItemOfItCompanies);

//solution 10
const secondItemOfItCompanies = itCompanies[1];
const thirdItemOfItCompanies = itCompanies[2];
const fifthItemOfItCompanies = itCompanies[4];
const sixthItemOfItCompanies = itCompanies[5];
console.log(firstItemOfItCompanies);
console.log(secondItemOfItCompanies);
console.log(thirdItemOfItCompanies);
console.log(middleItemOfItCompanies);
console.log(fifthItemOfItCompanies);
console.log(sixthItemOfItCompanies);
console.log(lastItemOfItCompanies);

//solution 11
console.log(firstItemOfItCompanies.toUpperCase());
console.log(secondItemOfItCompanies.toUpperCase());
console.log(thirdItemOfItCompanies.toUpperCase());
console.log(middleItemOfItCompanies.toUpperCase());
console.log(fifthItemOfItCompanies.toUpperCase());
console.log(sixthItemOfItCompanies.toUpperCase());
console.log(lastItemOfItCompanies.toUpperCase());

//solution 12
console.log(`${itCompanies.toString()} are big IT companies`)

//solution 13
if(itCompanies.includes('Facebook')){
     console.log(`${firstItemOfItCompanies}`);
}else{
    console.log('Company not found');
}

//solution 14


//solution 15
const sortItCompanies = itCompanies.sort();
console.log(sortItCompanies);

//solution 16
const reversedItCompanies = itCompanies.reverse();
console.log(reversedItCompanies);

//solution 17
const firstThreeItCompanies = itCompanies.slice(0,3);
console.log(firstThreeItCompanies);

//solution 18
const lastThreeItCompanies = itCompanies.slice(4, 7);
console.log(lastThreeItCompanies)

//solution 19
const middleItCompanies = itCompanies[3];
console.log(middleItCompanies);

//solution 20
const removeFirstItCompanies = itCompanies.shift();
console.log(itCompanies);

//solution 21
console.log(itCompanies.pop());

//23. 
console.log(itCompanies.splice())





