//solution 1

const countries = [
    {country: 'English',count:91},
    {country: 'French',count:45},
    {country: 'Arabic',count:25},
    {country: 'Spanish',count:24},
    {country:'Russian',count:9},
    {country:'Portuguese', count:9},
    {country:'Dutch',count:8},
    {country:'German',count:7},
    {country:'Chinese',count:5},
    {country:'Swahili',count:4}
]

//Extract the languages
let languagesInTheCountryFile = countries.map((country) => country.country);
// Extract the unique language names
const uniqueLanguages = new Set(languagesInTheCountryFile);
// Count the number of unique languages
const numLanguages = uniqueLanguages.size;
//output the number of languages
console.log(`The number of languages in the country file is: ${numLanguages}`);


//solution 2

const mostSpokenLanguages = countries
    // Sort the countries array based on the count property in descending order
    .sort((a, b) => b.count - a.count)
    // Get the top 10 elements
    .slice(0, 10) 
    // Create objects with clear properties
    .map(country => ({ language: country.country, count: country.count }));
mostSpokenLanguages.forEach(language => {
    console.log(` ${language.language}: ${language.count}`);
});


