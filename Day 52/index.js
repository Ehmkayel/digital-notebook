// Bubbling is when an event bubble from the inner element up through parents like a bubble in the water. like example if you click on the inner which is the child it will bubble till the outer event

const grandParent = document.querySelectorAll('form')
grandParent.forEach(element => {
    element.style.display = 'flex'
    element.style.justifyContent = 'center'
    element.style.alignItems = 'center'
    element.style.flexDirection = 'column'
    element.style.backgroundColor = 'red'
    element.style.padding = '50px'
    element.style.gap = '20px'

});

const parent = document.querySelector('.parent')
parent.style.backgroundColor = 'green'
parent.style.width = '500px'

const child = document.querySelector('.child')
child.style.backgroundColor = 'yellow'