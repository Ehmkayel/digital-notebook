let month = prompt('Enter Month');
switch (month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${month} has 31 days`);
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${month} has 30 days`);
        break;
    case 'February':
        console.log(`${month} has 28 days`);
        break;


    default:
        console.log('Not a month');
}


let year = new Date().getFullYear();

switch (month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${month} has 31 days`);
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${month} has 30 days`);
        break;
    case 'February':
        if( year % 4 !== 0){
            console.log(`${month} has 29 days`)
        }else{
        console.log(`${month} has 28 days`);
        }
        break;


    default:
        console.log('Not a valid month');
}