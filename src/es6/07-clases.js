// declarando
class user { }
// instancia de una clase
//const newUser = new user();

class user {
    gretting() {
        return 'Hello'
    }
}

const gndx = new user();
console.log(gndx.gretting())
const bebeloper = new user();
console.log(bebeloper.gretting())

// constructor

class user {
    constructor() {
        console.log('nuevo usuario')
    }
    gretting() {
        return 'Hello'
    }
}

const david = new user();

//this

class user {
    //constructor
    constructor(name) {
        this.name = name
    }
    //metodos
    speak() {
        return 'Hello'
    }
    gretting() {
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user('Ana')
console.log(ana.gretting())

//setters getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //metodos
    speak() {
        return 'Hello'
    }
    gretting() {
        return `${this.speak()} ${this.name}`
    }

    get uAge() {
        return this.age
    }
    set uAge(n) {
        return this.age = n
    }
}

const bebeloper1 = new user('Rodrigo', 25)
console.log(bebeloper1.uAge)
console.log(bebeloper1.uAge = 30)