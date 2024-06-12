const wrapper = document.querySelectorAll(".wrapper")
wrapper.forEach((content, i) =>{
    content.style.display = 'flex'
    content.style.flexDirection = 'column'
    content.style.textAlign ='center'
    
})

const project = document.querySelector('h3')
project.style.textDecoration = 'underline'
project.style.fontWeight = 'normal'

const author = document.querySelector('h4')
author.style.textDecoration = 'underline'
author.style.fontWeight = 'normal'

const bottom = document.querySelector('.bottom');
bottom.style.display = 'flex'
bottom.style.flexWrap = 'wrap'
bottom.style.alignItems = 'center'
bottom.style.width = '60%'
bottom.style.margin = 'auto'
bottom.style.justifyContent = 'space-evenly'

function isPrime(num) {
    if (num <= 1){
        return false;
    } 
    if (num === 2){
        return true;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false;
    }
}
    return true;
}

let count;
for(let i = 0; i < 102; i++){
    count = document.createElement('div');
    count.style.display = 'flex'
    count.style.alignItems = 'center'
    count.style.justifyContent = 'center'
    count.style.textAlign = 'center'
    count.style.width = '15%'
    count.style.height = '80px'
    count.style.color = 'white'
    count.style.margin = '2px'
    count.style.padding = '2px'
    count.style.fontWeight = 'bold'
    count.style.fontSize = '40px' 
    if(i % 2 === 0){
        count.style.backgroundColor = 'rgba(0, 128, 0, 0.6)';
    } else if(isPrime(i)){
        count.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
    } else {
        count.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
    }
    count.textContent = i;
    bottom.appendChild(count);
}
