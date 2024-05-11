//solution 1

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function userIdGeneratorByUser() {
    let generatedIds = '';
    let lengthOfCharacters = parseInt(prompt('Enter number of characters'));
    let numberOfIds = parseInt(prompt('Enter number of IDs to be generated'));

    if (isNaN(lengthOfCharacters) || isNaN(numberOfIds)) {
        alert('Please enter valid numbers');
        return;
    }

    for (let i = 0; i < numberOfIds; i++) {
        let userId = '';
        for (let j = 0; j < lengthOfCharacters; j++) {
            const randomId = Math.floor(Math.random() * characters.length);
            userId += characters[randomId];
        }
        generatedIds += userId + '\n';
    }
    console.log(generatedIds);
}

userIdGeneratorByUser();


