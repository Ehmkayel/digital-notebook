const countries = [
    { name: 'Afghanistan', capital: 'Kabul', population: 27657145, },
    { name: 'Åland Islands', capital: 'Mariehamn', population: 28875, },
    { name: 'Mali', capital: 'Bamako', population: 18135000, },
    { name: 'Malta', capital: 'Valletta', population: 425384, },
    { name: 'Marshall Islands', capital: 'Majuro', population: 54880, },
    { name: 'Martinique', capital: 'Fort-de-France', population: 378243, },
    { name: 'Mauritania', capital: 'Nouakchott', population: 3718678, },
    { name: 'Mauritius', capital: 'Port Louis', population: 1262879, },
    { name: 'Mayotte', capital: 'Mamoudzou', population: 226915, },
    { name: 'Monaco', capital: 'Monaco', population: 38400, },
    { name: 'Montenegro', capital: 'Podgorica', population: 621810, },
    { name: 'Montserrat', capital: 'Plymouth', population: 4922, }
   
  ]

  function sortByName(array) {
    const sortedNames = [];
    array.forEach((country) => {
      const index = sortedNames.findIndex(name => name.toLowerCase() > country.name.toLowerCase());
      if (index === -1) {
        sortedNames.push(country.name);
      } else {
        sortedNames.splice(index, 0, country.name);
      }
    });
    return sortedNames;
  }
  
  console.log(sortByName(countries));

  function sortByCapital(array) {
    const sortedCapitals = [];
    array.forEach((country) => {
      const index = sortedCapitals.findIndex(capital => capital.toLowerCase() > country.capital.toLowerCase());
      if (index === -1) {
        sortedCapitals.push(country.capital);
      } else {
        sortedCapitals.splice(index, 0, country.capital);
      }
    });
    return sortedCapitals;
  }
  console.log(sortByCapital(countries));
  
  function sortByPopulation(array) {
    const sortedPopulations = [];
    array.forEach((country) => {
      const index = sortedPopulations.findIndex(population => population > country.population);
      if (index === -1) {
        sortedPopulations.push(country.population);
      } else {
        sortedPopulations.splice(index, 0, country.population);
      }
    });
    return sortedPopulations;
  }
  
  console.log(sortByPopulation(countries));

  //solution 2

  
  
  
  