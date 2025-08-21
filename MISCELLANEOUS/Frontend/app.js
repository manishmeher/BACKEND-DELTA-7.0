// let  arr = [1, 2, 3];
// arr.sayHello = () => {
//     console.log("hello!, i am arr");
// };

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };

//     return person;
// }

//Constructors - doesnt't return anything & start with capital letters
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// };

// let p1 = new Person("kiara", 31);
// let p2 = new Person("shraddha", 32);

//Class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("kiara", 31);
// let p2 = new Person("shraddha", 32);

//Inheritance
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi I am ${this.name}`);
    }
}


class Student extends Person {
    constructor(name, age, marks) {
        super(name, age); //parent class constructor is being called
        this.marks = marks;
    }

}

let stu1 = new Student("kiara", 31, 95);


class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); //parent class constructor is being called
        this.subject = subject;
    }

}
