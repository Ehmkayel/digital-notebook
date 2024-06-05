// //solution 1

const countriesAPI = 'https://restcountries.com/v2/all'
 fetch(countriesAPI)
 .then((response)=> response.json())
 .then((data)=>{
     data.forEach(country => {
     const name = country.name
     const capital = country.capital
     const languages = country.languages.map(lang => lang.name).join(', ')
     const population = country.population
     const area = country.area
     const countryInfo = `Country: ${name}\nCapital: ${capital}\nLanguages: ${languages}\nPopulation: ${population}\nArea: ${area}\n------------`;
     console.log(countryInfo)

 });
 })
 .catch(error => console.log(error));