
const wrapper = document.querySelectorAll('.wrapper')
wrapper.forEach((content, i) => {
    content.style.display = 'flex'
    content.style.flexDirection = 'column'
    content.style.margin = 'auto'
    content.style.textAlign = 'center'
    
});

const heading = document.querySelector('h1')
heading.innerHTML = heading.innerHTML.replace('2020', "<span id='year'>2020</span>");
const year = document.getElementById('year');
let colors = ['blue', 'green', 'red', 'orange', 'purple', 'yellow']
setInterval(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    year.style.color = randomColor;
    year.style.fontSize = '60px'
}, 1000);


const subHeading = document.querySelector('h2')
subHeading.style.textDecoration = 'underline'
subHeading.style.fontSize = '16px'
subHeading.style.fontWeight = 'normal'
subHeading.style.margin = 'auto'

const lists = document.querySelectorAll('li')
lists.forEach((list, i) => {
    list.style.listStyleType = 'none'
    list.style.padding = '10px'
    list.style.margin = '2px auto'
    list.style.width = '40%'
    list.style.textAlign = 'start'
    
    if(list.textContent.includes('Coming')){
        list.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'
    }

})


lists[0].setAttribute('class', 'challenge-done')
lists[0].style.backgroundColor = 'rgba(0, 128, 0, 0.5)'


lists[1].setAttribute('class', 'challenge-ongoing')
lists[1].style.backgroundColor = 'rgba(255, 255, 0, 0.5)'








    

