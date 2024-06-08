//solution 1

const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)

//solution 2

const firstP = document.querySelector('#first-p')
const secondP = document.querySelector('#second-p')
const thirdP = document.querySelector('#third-p')
const fourthP = document.querySelector('#fourth-p')
console.log(firstP, secondP, thirdP, fourthP)

//solution 3

const nodeList = document.querySelectorAll('p')
console.log(nodeList)

//solution 4

for(let i = 0; i < nodeList.length; i++){
    console.log(nodeList[i].textContent)
}

//solution 5

nodeList[3].textContent = 'Fourth Paragraph'

//solution 6

nodeList[3].setAttribute('class', 'paragraphs')
nodeList[3].setAttribute('id', 'fourth-title')

nodeList[1].className = 'paragraphs'
nodeList[1].id = 'fourth-title'

console.log(nodeList)

