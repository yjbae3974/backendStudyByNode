class Person {
    constructor(name){
        this.name = name;
    }

    greet(){
        return `hi, ${this.name}`
    }
}

class Student extends Person {
    constructor(name){
        super(name)
    }

    study(){
        return `${this.name} is studying`
    }
}

const me  = new Student('YeunJun')
console.log(me.study());
console.log(me.greet());

//es6 문법. 완전 리액트네