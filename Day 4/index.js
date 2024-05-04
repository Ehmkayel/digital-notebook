const myName = 'Ramadan';
if(myName === 'Ramadan'){
    console.log('I love your name')
}


const myBestFruit = 'Apple';
const herBestFruit = 'pineapple';
if (myBestFruit.toLowerCase() === herBestFruit.toLowerCase()) {
    console.log('We love PineApple');
} else {
    console.log('Apple is my best fruit');
}


if (herBestFruit === 'guava') {
    console.log('I love guava too')
} else if (herBestFruit !== 'pineapple') {
    console.log('you should get pineapple for her next time')
} else {
    console.log('her best fruit is pineapple')

}

const kuagiTechEvent = 'career guidance'
switch(kuagiTechEvent){
    case 'cooking':
      console.log("I don't think that's the answer")
      break
    case 'networking':
      console.log("it's a bit close to the answer")
     break
    case 'career guidance':
     console.log("you're right about the theme")
     break
    default:
     console.log('tech events are always educative')
  }
