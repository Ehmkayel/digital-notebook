// selectedElement.addEventListener('eventlistner', e => {
//     // the activity you want to occur after the event will be in here
//   })

  //click: If we want to add an event listener to an element, we select the element first then attach the addEventListener(). This method takes event type and callback functions as argument.

function getFullDetails(name, age, school){
    console.log(`Name: ${name}, Age: ${age}, School: ${school}`);
    
}

function showDetails(){
    let name = "Ramadan El"
    let age = 20
    let school = "Green Fields Academy"
    alert(`Name: ${name}, Age: ${age}, School: ${school}`)
}

//The syntax to add event Listener is 

element.addEventListener(event, handler, [options]);



