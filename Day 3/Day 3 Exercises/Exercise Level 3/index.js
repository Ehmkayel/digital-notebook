const thisDay = new Date();
const year = thisDay.getFullYear();

let month = thisDay.getMonth() + 1;
if (month < 10) {
    month = '0' + month;
}

let date = thisDay.getDate();
if (date < 10) {
    date = '0' + date;
}

let hour = thisDay.getHours();
if (hour < 10) {
    hour = '0' + hour;
}

let minutes = thisDay.getMinutes();
if (minutes < 10) {
    minutes = '0' + minutes;
}

console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
