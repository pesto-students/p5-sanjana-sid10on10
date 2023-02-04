var Person = function (){

}

Person.prototype.initialize = function (name, age){
    this.name = name
    this.age = age
}

// class Teacher extends Person {
    
//     teach(subject){
//         console.log(`${this.name} is now teaching ${subject}`)
//     }
// }

const Teacher = function(){

}

Teacher.prototype.teach = function(subject){
    console.log(`${this.name} is now teaching ${subject}`)
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype)

var him = new Teacher();

him.initialize('Adam', 45)
him.teach('inheritance')