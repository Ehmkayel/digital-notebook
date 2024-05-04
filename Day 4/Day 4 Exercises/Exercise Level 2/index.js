//solution 1
const score = 0 
    if (score >= 80 && score <= 100) {
        console.log('you fall into grade A')
    } else if (score >= 70 && score <= 89) {
        console.log('you fall into grade B')
    } else if (score >= 60 && score <= 69) {
        console.log('you fall into grade C')
    } else if (score >= 50 && score <= 59) {
        console.log('you fall into grade D')
    } else if (score >= 0 && score <= 49) {
        console.log('you fall into grade F')
    } else {
        console.log('your score is invalid')
    }

//solution 2
    
const month = 'January'
    switch(month){
        case 'September':
        case 'October':
        case 'November':
            console.log('the season is Autumn');
            break;
        case 'December':
        case 'January':
        case 'February':
            console.log('the season is Winter');
            break;
        case 'March':
        case 'April':
        case 'May':
            console.log('the season is Spring');
            break;
        case 'June':
        case 'July':
        case 'August':
            console.log('the season is Summer');
            break;

        default:
            console.log('kindly input a valid month');
    }

//solution 3

const day = prompt('What day of the week is today?');
switch (day){
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(`${day} is a working day`);
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`${day} is a weekend day`);
        break;

    default:
        console.log('Input a valid day');
}






