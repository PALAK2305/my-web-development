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
// let items = [250, 645, 300, 900, 50];

// let i = 0;
//  for ( let val of items){
//    let offer = val / 10;
//    items[i] = items[i] - offer;
//    console.log('value after offer = ${items[i]}');
//    i++;
//  }

// array methods (push,pop,tostring,concat,unshift,slice,splice)
// let marks = [1,2,3,4,5,6,7];
// marks.push("100","200");
// console.log(marks);

// marks.pop();
// console.log(marks);

// marks.toString();
// console.log(marks);

// let m = ["23","12"]
// let mark = marks.concat(m);
// console.log(mark);

// marks.unshift("100"); 
// marks.shift();
// console.log(marks);

// console.log(marks.slice(0,1));
// marks.splice(1,2,3,4);

// practice
let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
// console.log(companies);

// remove 1st company(pop-> end delete & shift->start delete or slice)
// console.log(companies.slice(1,8));

// remove uber and add ola in its place
// companies.splice(2,1,"ola");

// to add amazon at the end (push->end unshift->start)
companies.push("Amazon");