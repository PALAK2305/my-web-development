// function- block of code that performs a specific task, can be invoked whenever needed

// function myfunction(){
//     console.log(" Hello Pluck");
//     console.log(" we are learning JS");
// }

// myfunction();

// example sum 2 no
// function sum(a,b){
//     console.log(a+b);
// }
// sum(5,6);

// or
// example sum 2 no
// function sum(a, b) {
//     s = a + b;
//     console.log("before return");
//     return s;
// }
// let val = sum(5, 6);
// console.log(val);

// arrow function(modern js)
// const mul = (a,b) => {
//     console.log(a*b);
// };

// practice question (return cont of vowels)
// function countvowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//  return count;
// }

// // in modern js style
// const countvow = (str) => {
//     let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//  return count;
// }

// foreach loop in arrays(higher order function)
// arr.forEach(callBackFunction)
// callbackfuntion: it is used to execute for each element in the Array
// A callback is a function passed asan argument to another function.

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){
//   console.log(val);
// })

// or

// let arr = [1,2,3,4,5];
// arr.forEach((val) => {
//   console.log(val);
// })

// let arr = ["pune","delhi","mumbai"];
//   arr.forEach((val,idx,arr) => {
//     console.log(val.toUpperCase(),idx);
//   });

// practice question (print the square foreach value)
// let arr = [1,2,3,4];
//   arr.forEach((val) => {console.log(val*val);
//   });

// some array methods
// Map is similar to the forEach loop but it create a new Array.
// example
// let nums = [67,53,89];
// let newarr = nums.map((val)=>{return val * 2});
// console.log(newarr);

// filter 
//  let arr = [1,2,3,,4,5,6,7];
//     let newarr = arr.filter((val) => {
//     return val > 4;
//     });
// console.log(newarr);

// Reduce is used to perform some operations & reduces the array to a single value.
// example for add
// let arr = [ 1,2,3,4];
//   const output = arr.reduce((prev,curr)=>{
//   return prev + curr;
// });
// console.log(output);

// example for biggest no 
// let arr = [1,2,3,4];
// const output = arr.reduce((prev,curr) =>{
//   return prev > curr ? prev : curr;
// });
// console.log(output);

// practice question 1
// let marks = [87,93,64,99,86];
//  let selected = marks.filter((val) =>{
//   return val >= 90;
// });

// console.log(selected);

// practice question 2
// let n= prompt("Enter a number :");
// let arr = [];
// for(let i=1; i<=n; i++){
//   arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((prev,curr) => {
//   return prev+curr;
// });
// console.log(sum);

// let product = arr.reduce((prev,curr) => {
//   return prev*curr;
// });
// console.log(product);