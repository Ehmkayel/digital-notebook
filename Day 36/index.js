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