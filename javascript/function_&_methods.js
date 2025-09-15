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
function countvowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
 return count;
}

const countvow = (str) => {
    let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
 return count;
}
