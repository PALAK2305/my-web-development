// let marks = ["98", "23", "45", "60"];
// // for loop
// for (let i=0; i<marks.length; i++){
// console.log(marks[i]);
// }

// practice question (average)
// let marks = [85,97,44,37,76,60];
// let sum = 0;

// for (let val of marks){
// sum +=val ;    
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// practice question
let items = [250, 645, 300, 900, 50];

let i = 0;
 for ( let val of items){
   let offer = val / 10;
   items[i] = items[i] - offer;
   console.log('value after offer = ${items[i]}');
   i++;
 }



