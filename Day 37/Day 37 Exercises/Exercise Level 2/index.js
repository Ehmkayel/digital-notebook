//solution 1

function outerFunction(){
    let age = 5
    function firstInnerFunction(){
        if(age < 3){
            console.log('age is less than 3')
        }else{
            console.log('Age is not less than 3')
        }
    }

    function secondInnerFunction(){
        for(let i = 0; i < 5; i++){
            console.log('The value of i is:', i)
        }

    }

    function thirdInnerFunction(){
        age--
        return age

    }

    return {
        firstInnerFunction: firstInnerFunction,
        secondInnerFunction: secondInnerFunction,
        thirdInnerFunction: thirdInnerFunction

    }
}

const innerFunctions = outerFunction()
innerFunctions.firstInnerFunction()
innerFunctions.secondInnerFunction()
console.log(innerFunctions.thirdInnerFunction())