// Prototype

function Person(name){
    this.name = name
}

function Student(name){
    this.__proto__.constructor(name)
}

Student.prototype.greet = function greet(){
    return `Hi, ${this.name}!`
}

Student.prototype.study = function study(){
    return `${this.name} is doing study`
}

Object.setPrototypeOf(Student.prototype,Person.prototype)

const me = new Student('YeunJun')

console.log(me.greet());
console.log(me.study())

// 근데 이거 es5문법.