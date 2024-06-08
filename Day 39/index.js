//get Elements by tagName

//syntax
document.getElementsByTagName('tagname')

const tags = document.getElementsByTagName('h1')
console.log(tags)
console.log(tags.length)

for(let i = 0; i < tags.length; i++){
    console.log(tags[i])
}

//get Elements by className

//syntax
document.getElementsByClassName('titles')
const titles = document.getElementsByClassName('title') 
console.log(titles)
console.log(titles.length)
for(let j = 1; j < titles.length; j++){
    console.log(titles[j])
}


//get Elements by ID

//syntax
document.getElementById('Id')
const idTitles = document.getElementById('second-title')
console.log(idTitles)

//getting Elements by query selector

//syntax
// document.querySelector('')

let firstTitle = document.querySelector('h1') // select the first available h1 element
let secondTitle = document.querySelector('#second-title') // select id with second-title
let classTitle = document.querySelector('.title') // select the first available element with class title

console.log(firstTitle)
console.log(secondTitle)
console.log(classTitle)

//querySelectorAll : can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

const allH1 = document.querySelectorAll('h1')
console.log(allH1)
console.log(allH1.length)
for (let i = 0; i < allH1.length; i++){
    console.log(allH1[i])
}

allH1.forEach(title => console.log(title))

//Adding attribute using setAttribute

//The setAttribute() method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.

const h1Titles = document.querySelectorAll('h1')
h1Titles[3].setAttribute('class', 'title')
h1Titles[3].setAttribute('id', 'fourth-title')


//Adding class using classList
//The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.

h1Titles[3].classList.add('title', 'header-title')


//Removing class using remove
//Similar to adding we can also remove class from an element. We can remove a specific class from an element.

h1Titles[3].classList.remove('header-title')

//Adding text using text content
h1Titles[3].textContent = 'This is the last title'

//Adding Text Content using innerHTML
// textContent is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.


h1Titles.forEach((title, i) => {
  title.style.fontSize = '24px' 
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})