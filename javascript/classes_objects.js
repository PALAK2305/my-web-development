// object - A javascript object is an entity having state and behavior (properties and method). js objects have a special property called prototype. We can set prototype using __proto__ . If object & prototype have same method, object's method will be used.
// eg
// const student = {
//     fullname : "Palak",
//     marks : 98.9,
//     printmarks : function() {
//         console.log("marks = ",this.marks);
//     },
// };

// eg
// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// };

// karanArjun.__proto__ = employee;

// classes - class is a program-code template for creating objects. Those objects will have some state(variables) & some behaviour (functions) inside it.
// syntax
// class MyClass {
//     constructor(){}
//     myMethod(){}
// }

// let myObj = new MyClass();



// constructor() method is automatically invoked by new, Initializes object
// syntax
// class Myclass {
//     constructor(){
//         myMethod(){}
//     }
// }



// eg
// class ToyotaCar {
//     constructor(brand, mileage){
//         console.log("creating new obj");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("start");
//     }
// }

// let fortuner = new ToyotaCar("fortuner",10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus",12);
// console.log("lexus");


// Inheritance - inheritance is passing down properties & methods from parent class to child class.
// if child & parent have same method. child's method will be used.(method overriding).
// syntax
// class Parent {

// }

// class Child extends Parent {

// }

// eg
// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj =  new Child();

// eg2
class Person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(name) { 
        super(name); //to invoke parent class constructor
    }

    work() {
        super.eat();
        console.log("solve problems, build Something");
    }
}

let engobj = new Engineer("Palak");


// Super keyword - The super keyword is used to call the constructor of its parent class to access the parent's properties and methods. 