// //solution 1

function getCatsInfo(){
    const catsAPI = 'https://api.thecatapi.com/v1/breeds'
    fetch(catsAPI)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(cat => {
            const catName = cat.name;
            const weightMetric = cat.weight.metric
            const result = `The cat: ${catName} has an Average weight in Metric of ${weightMetric}`
            console.log(`${result} ------------`)
        });
    })
    .catch((error) => {
        console.error('There was an error fetching data', error)
    })
}

getCatsInfo();

// solution 2

const countriesAPI = 'https://restcountries.com/v2/all';
fetch(countriesAPI)
.then((response) => response.json())
.then((data) =>{
    let largestCountries = []
    for(let i = 0; i < 10; i++){
        let largestCountry = data[0]
        data.forEach((country) => {
            if(country.area > largestCountry.area && !largestCountries.includes(country)){
                largestCountry = country;
            }
        });
        largestCountries.push(largestCountry)
    }
    largestCountries.forEach((country) => {
        console.log(`The largest country is ${country.name}`)
    })
})
.catch((err) => console.log(err));





