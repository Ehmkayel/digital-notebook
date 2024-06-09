## Day 40 of #100DaysOfCode

## Table of contents
- [The challenge](#the-challenge)
- [Solution](#the-solution)
- [Screenshots](#screenshot)
- [What I am Proud of](#what-I-am-proud-of)
- [Get in Touch](#get-in-touch)

## The challenge

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example

The maximum height candles are  units high. There are  of them, so return .

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest
Input Format

The first line contains a single integer, , the size of .
The second line contains  space-separated integers, where each integer  describes the height of .

Constraints

Sample Input 0

4
3 2 1 3
Sample Output 0

2
Explanation 0

Candle heights are . The tallest candles are  units, and there are  of them.

## Solution

- function birthdayCakeCandles(candles): This line declares a function named birthdayCakeCandles which takes an array candles as its parameter.

- I initializes a variable count with the value of the first element of the candles array. This will be used to keep track of the tallest candle height.

- I also initialize a variable maxHeight to keep track of how many candles have the same height as the maximum candle

- Then I loop through each elements of the candles array.

- Inside the loop, the if statement checks if the current candle's height is greater than the current tallest candle (count). If it is, then it updates the value of count to the height of the current candle.

- I creates another loop that iterates over each element of the candles array.

- Inside this loop, if the height of the current candle is equal to the height of the tallest candle (count), then it increments the value of tallestCount.

- After this loop, maxHeight will hold the count of candles with the same height as the tallest candle.

- Finally, the function returns the value of maxHeight, which represents the number of candles with the maximum height.



## Screenshot

![Questions](./Screenshots/questions.png)
![congratulation](./Screenshots/congratulations.png)


## Get in Touch

You can reach out to me;
 - Linkedin- [Morufat-Lamidi](https://linkedin.com/in/morufat-lamidi)
 - Frontend Mentor - [@Ehmkayel](https://www.frontendmentor.io/profile/Ehmkayel)
 - Twitter - [@kamalehmk](https://www.twitter.com/kamalehmk)
 - Gmail- [Mail](mailto:lamidimorufat0@gmail.com);

