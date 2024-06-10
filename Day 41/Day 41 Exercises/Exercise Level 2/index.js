//solution 1

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((paragraph, i) => {
    paragraph.style.color = 'blue'
    paragraph.style.backgroundColor = 'purple'
    paragraph.style.border = '3px solid yellow'
    paragraph.style.fontSize = '24px'
    paragraph.style.fontFamily = 'Monospace'
    
})

//solution 2

paragraphs.forEach((paragraph, i) => {
    if(i % 2 === 0){
        paragraph.style.color = 'red'
    }else{
        paragraph.style.color = 'green'
    }

})

//solution 3

paragraphs[0].classList.add('paragraph', 'first-p')
paragraphs[0].id = 'first-paragraph'
paragraphs[0].textContent = "To view it in browser; right click and click on inspect then navigate to the console, this is the first paragraph"

paragraphs[1].classList.add('paragraph', 'second-p')
paragraphs[1].id = 'second-paragraph'
paragraphs[1].textContent = 'for windows: the shortcut is ctrl + shift + j, this is the second paragraph'

paragraphs[2].classList.add('paragraph', 'third-p')
paragraphs[2].id = 'third-paragraph'
paragraphs[2].textContent = 'for macOS: the shortcut is cmd + option + j, this is the third paragraph'

paragraphs[3].classList.add('paragraph', 'fourth-p')
paragraphs[3].id = 'fourth-paragraph'
paragraphs[3].textContent = 'I love coding, this is the fourth paragraph'
console.log(paragraphs)
