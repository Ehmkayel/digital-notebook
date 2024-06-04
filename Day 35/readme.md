## Day 35 of #100DaysOfCode 

## Table of contents
- [The challenge](#the-challenge)
- [What I learned Today](#what-I-learned-today)
- [Resources Used](#resources)
- [Key Takeaways](#key-takeaways)
- [Next Steps](#next-steps)
- [Get in Touch](#get-in-touch)



## What I Learned Today

- Web Storage and 
- Web Storage Objects

## Resources Used

- Asabeneh Yetaweh #30DaysOfJavaScript: [Web Storage](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/17_Day_Web_storages/17_day_web_storages.md)

## Key Takeaways

Use case of Web Storages
Some use case of Web Storages are

- store data temporarily
- saving products that the user places in his shopping cart
- data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
- can be used offline completely using localStorage
- Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
- can be used for user authentication method

We also five methods of local storage:

- setItem()
- getItem()
- removeItem()
- clear()
- key()

Web Storage objects:

localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

It is always good to use sessionStorage when we want to get rid of the data as soon as the window is closed. Or, perhaps, if we do not want the application to interfere with the same application that’s open in another window. These scenarios are served best with sessionStorage.

HTML web storage provides two objects for storing data on the client:

- window.localStorage - stores data with no expiration date
- window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)Most modern browsers support Web Storage, however it is good to check browser support for localStorage and sessionStorage. 


## Next Steps

- Continue practicing web storage with more complex patterns
- Apply web storage to real-world projects or coding challenges


## Get in Touch

You can reach out to me;
 - Linkedin- [Morufat-Lamidi](https://linkedin.com/in/morufat-lamidi)
 - Frontend Mentor - [@Ehmkayel](https://www.frontendmentor.io/profile/Ehmkayel)
 - Twitter - [@kamalehmk](https://www.twitter.com/kamalehmk)
 - Gmail- [Mail](mailto:lamidimorufat0@gmail.com);

