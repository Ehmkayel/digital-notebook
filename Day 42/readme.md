## Day 42 of #100DaysOfCode 

## Table of contents
- [The challenge](#the-challenge)
- [What I learned Today](#what-I-learned-today)
- [Resources Used](#resources)
- [Key Takeaways](#key-takeaways)
- [Next Steps](#next-steps)
- [Get in Touch](#get-in-touch)



## What I Learned Today

- Manipulating Document Object Models


## Resources Used

- Asabeneh Yetaweh #30DaysOfJavaScript: [Manipulating Document Object Models](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)

## Key Takeaways
 - Creating elements : Multiple elements can be created using loop. After we create the element we can assign value to the different properties of the HTML object.
 ```JavaScript
 let title
 for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = i
    console.log(title)
 }
 
 ```

 - Appending child to a parent element : In other for us to see the element we created on the html document, it's best to append it to the parent as a child element. The html document can be access using document.body as it supports the appendChild() method.

 ```JavaScript
 
 
 ```





## Next Steps

- Continue practicing how to manipulate document object models with more complex patterns
- Apply dom to real-world projects or coding challenges


## Get in Touch

You can reach out to me;
 - Linkedin- [Morufat-Lamidi](https://linkedin.com/in/morufat-lamidi)
 - Frontend Mentor - [@Ehmkayel](https://www.frontendmentor.io/profile/Ehmkayel)
 - Twitter - [@kamalehmk](https://www.twitter.com/kamalehmk)
 - Gmail- [Mail](mailto:lamidimorufat0@gmail.com);

