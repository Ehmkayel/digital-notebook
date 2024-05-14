// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
  }
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  console.log(cube(callback, 3))


  const numbers = [3, 9, 3, 7]
  const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))