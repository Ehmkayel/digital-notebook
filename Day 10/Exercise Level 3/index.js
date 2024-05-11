//solution 1

// let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// function userIdGeneratorByUser() {
//     let generatedIds = '';
//     let lengthOfCharacters = parseInt(prompt('Enter number of characters'));
//     let numberOfIds = parseInt(prompt('Enter number of IDs to be generated'));

//     if (isNaN(lengthOfCharacters) || isNaN(numberOfIds)) {
//         alert('Please enter valid numbers');
//         return;
//     }

//     for (let i = 0; i < numberOfIds; i++) {
//         let userId = '';
//         for (let j = 0; j < lengthOfCharacters; j++) {
//             const randomId = Math.floor(Math.random() * characters.length);
//             userId += characters[randomId];
//         }
//         generatedIds += userId + '\n';
//     }
//     console.log(generatedIds);
// }

// userIdGeneratorByUser();

//solution 2

function rgbColorGenerator(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    if(red < 10){
      red = '0' + red;
    } 
    if(green < 10){
      green = '0' + green;
    } 
    if (blue < 10){
      blue = '0' + blue;
    }
    
    return `rgb(${red},${blue},${green})`; 
  }

console.log(rgbColorGenerator());


//solution 3

function arrayOfHexaColors() {
    let count = 7; 
    let hexaColors = [];
    let generatedCount = 0;
  
    while (generatedCount < count) {
      let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      hexaColors.push(color);
      generatedCount++;
    }
  
    return hexaColors;
}

console.log(arrayOfHexaColors());


//solution 4

function arrayOfRgbColors(params) {
    let colors = [];

    for (let i = 0; i < params; i++) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        let color = `rgb(${red}, ${green}, ${blue})`;
        colors.push(color);
    }
    
    return colors;
}

console.log(arrayOfRgbColors(4));


//solution 5

function convertHexaToRgb(hexColor) {
    hexColor = hexColor.replace('#', '');
    let rgb = [];
    for (let i = 0; i < 6; i += 2) {
        let hex = hexColor.substring(i, i + 2);
        rgb.push(parseInt(hex, 16));
    }

    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

console.log(convertHexaToRgb('#ff0000')); 

//solution 6

function convertRgbToHexa(rgbColor) {
    let rgbComponents = rgbColor.match(/\d+/g);
    let hexa = '#';
    for (let component of rgbComponents) {
        hexa += parseInt(component).toString(16).padStart(2, '0');
    }

    return hexa;
}

console.log(convertRgbToHexa('rgb(250, 40, 250)'));





  



