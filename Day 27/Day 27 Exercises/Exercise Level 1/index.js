//solution 1

//define the country array
const countries = ['Nigeria', 'France', 'Algeria']
//log the country array to the browser as a table with index and value
console.table(countries)

//solution 2

//A countriesObject with different countries
const countriesObject= {
    countryA: {
        name: 'Afghanistan',
        capital: 'Kabul',
        population: 27657145,
    },
    countryB: {
        name: 'Åland Islands',
        capital: 'Mariehamn', 
        population: 28875
    },
    countryC: {
        name: 'Mali', 
        capital: 'Bamako', 
        population: 18135000,
    },
    countryD: {
        name: 'Malta', 
        capital: 'Valletta', 
        population: 425384,
    },
    countryE: {
        name: 'Montserrat', 
        capital: 'Plymouth', 
        population: 4922, 
    }

}
 //this will print the countriesObject to the console as a table 
console.table(countriesObject)

//solution 3

console.group('country')
console.log(countries)
console.groupEnd()

console.group('Country Objects')
console.log(countriesObject)
console.groupEnd()

console.group('Countries')
console.group(countries)
console.group(countriesObject)
console.groupEnd()