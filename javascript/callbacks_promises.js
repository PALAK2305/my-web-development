// async await >> promise chains >> callback hell

// synchronous -: The code runs in a particular sequence of instructions given in the program.
//  Each instruction waits fotr the previous instruction to complete its execution.

//  eg
// console.log("one");
// console.log("two");
// console.log("three");

// asynchronous -: due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
// asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// // eg
// console.log("one");
// console.log("two");

// setTimeout(() => {
//   console.log("hello");
// }, 2000); //timeout;

// console.log("three");
// console.log("four");

// callbacks - A callback is a function passed as an argument to another function.

// eg
// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumcallback) {
//     sumcallback(a, b);
// }

// calculator(1, 2, sum);

// callback hell - nested callbacks stacked below one another forming a pyramid structure.(pyramid of doom)
// This style of programming becomes difficult to understand & manage.

// eg
// function getdata(dataid, getnextdata) {
  //2s
//   setTimeout(() => {
//     console.log("data", dataid);
//     if (getnextdata) {
//       getnextdata();
//     }
//   }, 2000);
// }

// getdata(1, () => {
//   console.log("getting data2 .....");
//   getdata(2);
//   getdata(2, () => {
//     console.log("getting data3 .....");
//     getdata(2);
//     getdata(3, () => {
//       console.log("getting data4 .....");
//       getdata(4);
//     });
//   });
// });


// Promises - Promise is for "eventual" completion of task. it is an object in JS.
// It is a solution to callback hell.
// let promise = new Promise ((resolve,reject) => {....})
// resolve & reject are callbacks provided by JS

// eg1
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     resolve(123);
// });


// eg2
// function getdata(dataid, getnextdata) {
//   return new Promise((resolve, reject) => {
//      setTimeout(() => {
//     console.log("data", dataid);
//     resolve("success");
//     if (getnextdata) {
//       getnextdata();
//     }
//   }, 5000);
//   });
// }

// Promises - .then(), .catch()
// Promise.then((res) => {...})
// Promise.catch((err) => {...})

// eg1
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//      console.log("I am a Promise");
//     resolve("Success");
//    });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fulfilled");
// });


// eg2
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//      console.log("I am a Promise");
//     reject("Error");
//    });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fulfilled");
// });

// promise.catch((err) => {
//     console.log("rejected");
// });

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("some data1");
        resolve("success");
        }, 3000);
    });
};