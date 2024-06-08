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
