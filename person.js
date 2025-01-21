// const person = {
//     name: "Md. Humayan Kabir",
//     age: 28,
// }

// module.exports = person;


// create a class and exports 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}

module.exports = Person;