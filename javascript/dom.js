// window-: The window object represents an open window in a browser.It is browser's object(not JavaScript's) & is automatically created by browser. It is a global object with lots of properties & methods.
// DOM-:when a web page is loaded, the browser creates a Document Object Model(DOM) of the page.

// type 1 selecting with id - document.getElementById
// let subheading = document.getElementById("myid");
// console.dir(myid);

// //  type 2 selecting with class - document.getElementByClassName("myClass")
// let headings = document.getElementsByClassName("myclass");
// console.dir(headings);
// console.log(headings);

// //  type 3 selecting with tag - document.getElementByTagName("p")
// let parag = document.getElementsByTagName("p");
// console.dir(parag);

// // Query selector - document.querySelector("myid/myclas/tag")
// let firstel = document.querySelector("p");
// console.dir(firstel);

// let allelements = document.querySelectorAll("p");
// console.dir(allelements);

// properties(tagName, innertext, innerhtml, textContent)

// practice question 1
 
// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " from apna college";
// console.dir(h2.innerText);

// practice question 2

// let div = document.querySelectorAll(".box");
// div[0].innerText = "new value 1";
// div[1].innerText = "new value 2";
// div[2].innerText = "new value 3";

// or 

let divs = document.querySelectorAll(".box");
let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}