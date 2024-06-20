const wrapper = document.querySelectorAll(".wrapper")
wrapper.forEach((content, i) =>{
    content.style.display = 'flex'
    content.style.flexDirection = 'column'
    content.style.textAlign ='center'
    
})

const heading = document.querySelector('h1')
heading.style.color = 'rgba(0, 128, 0, 0.6)'

const project = document.querySelectorAll('h3, h4')
project.forEach((project => {
    project.style.fontWeight = 'normal'
}))

const buttons = document.querySelectorAll('.buttons')
buttons.forEach((button => {
    button.style.display = 'flex'
    button.style.justifyContent = 'center'
    button.style.flexWrap = 'wrap'
    button.style.gap = '20px'
}))

const quantityInput = document.querySelector("#quantity");
quantityInput.style.width = '400px'
quantityInput.style.padding = '10px'

const greenButton = document.querySelector('#greenButton')
greenButton.style.backgroundColor = 'rgba(0, 128, 0, 0.6)'
greenButton.style.color = 'white'
greenButton.style.padding = '10px'
greenButton.style.border = 'none'
greenButton.style.cursor = 'pointer'

const errorMessage = document.getElementById('error');
errorMessage.textContent = 'Please enter a valid number greater than zero'
errorMessage.style.color = 'red'
errorMessage.style.fontWeight = 'bold'
errorMessage.style.marginTop = '5px'
errorMessage.style.display = 'none'

const bottom = document.querySelector('.bottom');
bottom.style.display = 'flex'
bottom.style.flexWrap = 'wrap'
bottom.style.alignItems = 'center'
bottom.style.width = '60%'
bottom.style.margin = '10px auto 0'
bottom.style.justifyContent = 'space-evenly'


function clearNumbers() {
    const container = document.getElementById('numberContainer')
    container.innerHTML = ''
}
 
greenButton.addEventListener('click', generateNumbers);


function generateNumbers() {
    const quantity = parseInt(quantityInput.value)
    if (isNaN(quantity) || quantity <= 0) {
        errorMessage.style.display = 'block'
        clearNumbers()
        return
        
    }

    errorMessage.style.display = 'none'
    clearNumbers()
 
    const container = document.getElementById('numberContainer')
     
      for (let i = 1; i <= quantity; i++) {
        let numberDiv = document.createElement('div')
        numberDiv.style.display = 'flex'
        numberDiv.style.alignItems = 'center'
        numberDiv.style.justifyContent = 'center'
        numberDiv.style.width = '10%'
        numberDiv.style.height = '30px'
        numberDiv.style.color = 'white'
        numberDiv.style.margin = '2px'
        numberDiv.style.padding = '2px'
        numberDiv.style.fontSize = '28px'
        numberDiv.style.fontWeight = 'bold'
        numberDiv.style.border = '2px solid transparent'
        if(i % 2 === 0){
            numberDiv.style.backgroundColor = 'rgba(0, 128, 0, 0.6)'
        } else if(isPrime(i)){
            numberDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'
        } else {
            numberDiv.style.backgroundColor = 'rgba(255, 255, 0, 0.8)'
        }
        numberDiv.textContent = i
        container.appendChild(numberDiv)
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}





  
   