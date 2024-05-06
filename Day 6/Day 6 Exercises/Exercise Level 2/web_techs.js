const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  //solution 5

  if(webTechs.includes('Sass')){
    console.log('Sass is a css preprocess');
  } else {
    countries.push('Sass');
    console.log(webTechs)
  }

  //solution 6

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node','Express', 'MongoDB'];
  const fullStack = frontEnd.concat(backEnd);
  console.log(fullStack)

