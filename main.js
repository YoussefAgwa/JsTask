// [1] Even or Odd
// function evenOdd(number) {
//   if (typeof number === "number") {
//     if (number % 2 == 0) {
//       console.log(`${number} Is Even Number`);
//     }else {
//       console.log(`${number} Is Odd Number`);
//     }
//   }else {
//     console.log(`Please Enter Valid Number`)
//   }
// }
// evenOdd(54);
/////////////////////////////////////////////////////
// [2]
// let nums = [];
// function fizzBuzz (nums) {
//   for (let num of nums) {
//     if(typeof num === "number") {
//       if(num % 3 == 0){
//         if (num % 3 == 0 && num % 5 == 0) {
//           console.log(`(FizzBuzz)`);
//           continue;
//         }
//         console.log(`(Fizz)`);
//       }else if(num % 5 == 0){
//         console.log(`(Buzz)`);
//       }else {
//         console.log(`(${num})`);
//       }
//     }else {
//       console.log(`Enter Valid Numbers`)
//       break;
//     }
//   }
// }
// fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
/////////////////////////////////////////////////////
// [3]
// function reverseStr (word) {
//   for(let i = word.length - 1; i >= 0 ; i--){
//     console.log(word[i]);
//   }
// }
// reverseStr(`Welcome`);
// let word= `welcome`;
// console.log(Array.from(word).reverse().join("")); // Second Solution
/////////////////////////////////////////////////////
// [4]
// function areaAndCircum (radius) {
//   if(typeof radius === 'number' && radius > 0){
//     console.log(`Area Of Circle is ${(radius**2)*3.14}`);
//     console.log(`Circumference Of Circle is ${2*3.14*radius}`);
//   }else {
//     console.log(`Please Enter Valid Radius`);
//   }
// }
// areaAndCircum(3);
/////////////////////////////////////////////////////
// [5]

// function check50 (num1,num2) {
//   if (num1 == 50 | num2 == 50 | num1 + num2 == 50) {
//     console.log("true");
//   }
// }
// check50(,);
/////////////////////////////////////////////////////
//[6]
// function checkPosNeg(num1,num2) {
//   if (num1 > 0 && num2 > 0) {
//     console.log(`Both Are Positives`);
//   }else if (num1 < 0 && num2 < 0) {
//     console.log(`Both Are Negatives`);
//   }
//   else if (num1 > 0 && num2 < 0) {
//   console.log(`One Is Positive & Two Is Negative`);
//   }
//   else if (num1 < 0 && num2 > 0) {
//     console.log(`One Is Negative & Two Is Positive`);
//   }
// }
// checkPosNeg(-1,2);
/////////////////////////////////////////////////////
//[7]
// function checkMultiple (num) {
//   if(num > 0 && num % 5 == 0) {
//     console.log(`${num} is Multiple Of 5`);
//   } else if (num > 0 && num % 8 == 0 ){
//     console.log(`${num} is Multiple Of 8`);
//   }else {
//     console.log(`Try Another Number ^_^`);
//   }
// }
// checkMultiple(64);
// checkMultiple(25);
/////////////////////////////////////////////////////
//[8]
// function findMax(num1,num2,num3) {
//   let arr = [num1,num2,num3];
//   console.log(Math.max(...arr));
// }
// findMax(100,200,300);

// another Solution => More Than 3 Numbers
// function findMax() {
//   console.log(Math.max(...arguments));
// }
// findMax(100,200,300);
/////////////////////////////////////////////////////
//[9]
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = arr.reduce((acc , curr) => {
//   return (acc + curr);
// });
// console.log(sum);
/////////////////////////////////////////////////////
//[10]
// function asteriskPrint() {
//   for(let i = 1; i <= 5; i++){
//     console.log(`*`.repeat(i));
//   }
// }
// asteriskPrint()

//Another Solution ======> Choose Number of Rows To Draw
// function asteriskPrint(row) {
//   for(let i = 1; i <= row; i++){
//     console.log(`*`.repeat(i));
//   }
// }
// asteriskPrint(10)
/////////////////////////////////////////////////////
// [11]
// function evenOdd (num) {
//   if(typeof num == "number"){
//     if (num % 2 == 0){
//       console.log(`${num} Is Even Number`);
//     }else {
//       console.log(`${num} Is Odd Number`);
//     }
//   }else {
//     console.log(`Enter a Valid Number`);
//   }
// }
// evenOdd(2);
/////////////////////////////////////////////////////
//[12]
// let arr = [];
// arr.push(1,2,3,4,5,6,7,8,9,10,11,12,13,14);
// function printArr(arr){
//   arr.forEach((ele) => {
//   console.log(`Element- ${arr.indexOf(ele)} Is ${ele}`);
// })}
// printArr(arr);
/////////////////////////////////////////////////////
//[13]
// function sum (num1,num2) {
//   if (typeof num1 =="number" && typeof num2 =="number" ) {
//     console.log(`The Result is ${num1 + num2}`);
//   }else { 
//     console.log(`Enter Valid Numbers`);
//   }
// }
// sum(80,10);
/////////////////////////////////////////////////////
//[14]
// function factorial(num) {
//   if(num === 0 | num === 1) {
//     console.log(`Factorial => ${num}`);
//   }else {
//     for(i = num - 1; i > 1; i--) {
//       num *= i;
//     }
//     console.log(`Factorial => ${num}`);
//   }
// }
// factorial(5);
/////////////////////////////////////////////////////
// [15]
// function calc(num1,num2,op) {
//   let res;
//   switch (op) {
//     case "+":
//       res = num1 + num2;
//       break;
//     case "-":
//       res = num1 - num2;
//       break;
//     case "*":
//       res = num1 * num2;
//       break;
//     case "/":
//       res = num1 / num2;
//       break;
//   }
//   console.log(res)
// }
// calc(12,6,"/");
/////////////////////////////////////////////////////