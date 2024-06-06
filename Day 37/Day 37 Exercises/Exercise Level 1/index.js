//solution 1

function outerFunction(){
    const name = 'Lamidi Morufat'
    function innerFunction(){
        if(name.length == 0){
            console.log('Name is short')
        }else{
            console.log('Name is long')
        }
    }
    return innerFunction  
}
const innerFunc = outerFunction()
innerFunc()