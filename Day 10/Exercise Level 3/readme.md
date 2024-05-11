## Exercise Level 3 Questions

1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
2. Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)
3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

7. Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

11. Call your function sum, it takes any number of arguments and it returns the sum.

12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'
15. Write a function called isPrime, which checks if a number is prime number.

16. Write a functions which checks if all items are unique in the array.

17. Write a function which checks if all the items of the array are the same data type.

18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array