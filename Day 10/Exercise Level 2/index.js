//solution 1

function solveLinEquation(a, x, b, y, c){
    let linearEquation = ((a * x) + (b * y) + c);
    return linearEquation;
}
console.log(solveLinEquation(3, 5, 7, 9, 8));

//solution 2


function solveQuadratic(a, b, c){
    let quadraticEquation = b * b - 4 * a * c;
    if(quadraticEquation > 0){
        let equation1 = (-b + Math.sqrt(quadraticEquation)) / (2 * a);
        let equation2 = (-b - Math.sqrt(quadraticEquation)) / (2 * a);
        return [equation1, equation2];
    }else if (quadraticEquation === 0) {
        let equation = -b / (2 * a);
        return [equation];
    } else {
        return 0;
    }
} 

console.log(solveQuadratic()); 
console.log(solveQuadratic(1, 4, 4));
console.log(solveQuadratic(1, -1, -2));
console.log(solveQuadratic(1, 7, 12)); 
console.log(solveQuadratic(1, 0, -4)); 
console.log(solveQuadratic(1, -1, 0));

//solution 3

function printArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
  }
}

printArray([2, 6, 10, 12, 15]);

//solution 4

function showDateTime(){
    let time = new Date();
    let month = time.getMonth();
       if(month < 10){
        month = '0' + month;
       }
    let day = time.getDay();
       if(day < 10){
        day = '0' + day;
       }
    let year = time.getFullYear();
    let minutes = time.getMinutes()
        if(minutes < 10){
            minutes = '0' + minutes;
        }

    let seconds = time.getSeconds();
    if (seconds < 10){
        seconds = '0' + seconds
      }
    let dateTime = `${month}/${day}/${year} ${minutes}:${seconds}`
    return dateTime;
}
console.log(showDateTime());


//solution 5

function swapValues(x, y){
    let constant = x;
    x = y;
    y = constant
    return{x,y}

}

console.log(swapValues(3, 4)); 
console.log(swapValues(4, 5));

//solution 6

function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5])); 
console.log(reverseArray(['A', 'B', 'C'])); 

//solution 7

function capitalizeArray(array) {
    let capitalizedArray = [];
    for (let i = 0; i < array.length; i++) {
        let capitalized = array[i].toUpperCase();
        capitalizedArray.push(capitalized);
    }
    return capitalizedArray;
}

console.log(capitalizeArray(["lamidi", "morufat", "kajogbola"])); 

//solution 8

function addItem(item) {
    let array = ['Ramadan', 'Morufat'];
    array.push(...item);
    return array;
}

console.log(addItem([1, 2, 3]));

//solution 9

function removeItem(index){
    let fruits = ['mango', 'apple', 'pineapple', 'guava']
    let removed = fruits.slice(index)
    return removed;
}

console.log(removeItem(2))

//solution 10

function sumOfNumbers(number){
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers(20))

//solution 11

function sumOfOdds(number){
    let oddNumber = 0;
    for (let i = 1; i <= number; i++){
        if(i % 2 !== 0){
            oddNumber = oddNumber + i;
        }
    }
    return oddNumber;
}

console.log(sumOfOdds(300));

//solution 12

function sumOfEven(number){
    let evenNumber = 0;
    for(let i = 2; i <= number; i++){
        if(i % 2 === 0){
            evenNumber = evenNumber + 1;
        }
    }
    return evenNumber
}

console.log(sumOfEven(300));

//solution 13

function evensAndOdds(positiveInteger){
    let evenNumber = 0;
    let oddNumber = 0;
   
    for (let i = 1; i <= positiveInteger; i++) {
        if (i % 2 === 0) {
          evenNumber++;
        } else {
          oddNumber++;
        }
      }
    
      console.log(`The number of evens are: ${evenNumber}`);
      console.log(`The number of odds are: ${oddNumber}`);
    }
    
    evensAndOdds(100);

    //solution 14


    function sum() {
        let totalSum = 0;
        for (let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i];
        }
        return totalSum;
    }

    console.log(sum(1, 2, 3)); 
    console.log(sum(1, 2, 3, 4));
    
    //solution 15

    function generateRandomUserIp() {
        const userFirstIp = Math.floor(Math.random() * 256);
        const userSecondIp = Math.floor(Math.random() * 256);
        const userThirdIp = Math.floor(Math.random() * 256);
        const userFourthIp = Math.floor(Math.random() * 256);
        return `${userFirstIp}.${userSecondIp}.${userThirdIp}.${userFourthIp}`;
    }
    
    console.log(`Random Ip Address generated is: ${generateRandomUserIp()}`); 

    //solution 16

    function generateRandomMacAddress(){
        let macAddress = '';
        for (let i = 0; i < 6; i++) {
            const hexaDecimalByte = Math.floor(Math.random() * 256).toString(16);
            const paddedByte = hexaDecimalByte.padStart(2, '0');
            macAddress += paddedByte;
            if (i < 5) {
                macAddress += ':';
            }
        }
        return macAddress.toUpperCase();
    }
    
    console.log(`The random MAC address generated is ${generateRandomMacAddress()}`);


    //solution 17
    function randomHexaNumberGenerator() {
        let hexaNumber = Math.floor(Math.random() * 16777216).toString(16);
        
        while (hexaNumber.length < 6) {
          hexaNumber = '0' + hexaNumber;
        }
        
        return '#' + hexaNumber;
      }

    console.log(randomHexaNumberGenerator()); 

    //solution 18

    function userIdGenerator() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let userId = "";
        for (let i = 0; i < 7; i++) {
          userId += characters[Math.floor(Math.random() * characters.length)];
        }
        return userId;
      }
      
      console.log(userIdGenerator());
    
    
    

    

