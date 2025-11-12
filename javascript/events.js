// events - the change in the state of an object is known as an Event.
// events are fired to notify code of "interesting changes" that may affect code execution.

// mouse events ( click, double click etc)
// Keyboard Event (keypress, MediaKeyStatusMap, keydown)
// form events (submit etc)
// print Event & many more

let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

// let box = document.querySelector("div");

// box.onmouseover = () => {
//     console.log("you are inside div");
// }

// Event object - it is a special object that has details about the Event. All Event handlers have access to the Event Object's properties and methods
