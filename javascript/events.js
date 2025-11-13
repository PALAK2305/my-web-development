// events - the change in the state of an object is known as an Event.
// events are fired to notify code of "interesting changes" that may affect code execution.

// mouse events ( click, double click etc)
// Keyboard Event (keypress, MediaKeyStatusMap, keydown)
// form events (submit etc)
// print Event & many more

// Event object - it is a special object that has details about the Event. All Event handlers have access to the Event Object's properties and methods

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// let box = document.querySelector("div");

// box.onmouseover = () => {
//     console.log("you are inside div");
// }

// Event listeners -: node.addEventListener(event,callback)

// let btn1= document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//     console.log(evt);
//     console.log("button 1 was clicked");
// });

// btn1.addEventListener("click", () => {
//     console.log("button 2  was clicked");
// });

// btn1.addEventListener("click", () => {
//     console.log("button 4  was clicked");
// });

// const handler3=  () => {
//     console.log("button 3  was clicked");
// }
// btn1.removeEventListener("click",handler3);

// practice question (toggle button dark and white mode)
// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currmode = "light"; //dark

// modebtn.addEventListener("click", ()=>{
//     if(currmode=="light"){
//        currmode= "dark";
//        body.classList.add("dark");
//        body.classList.remove("light");
//     }
//     else{
//         currmode ="light";
//         body.classList.add("light");
//         body.classList.remove("dark");

//     }
//     console.log(currmode);
// });
