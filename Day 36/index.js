//Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.


//The constructor syntax for a promise object is:
// let promise = new Promise(function(resolve, reject) {
//     // executor (the producing code, "singer")
//   });

  function getWeather(){
    return new Promise(function(resolve, reject){
        reject('sunny')

    })
  }
  const promise = getWeather()
  promise.then(
    function(data){
        console.log(`first Param ${data}`)
    },
    function(data){
        console.log(`second param ${data}`)
    }
  )

  //call back Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err parameter is false, there will not be error other wise it will return an error.

  // Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))