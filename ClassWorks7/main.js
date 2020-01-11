// ------------------------- 

function Num(a, b) {
    this.a = a;
    this.b = b;
}

Num.prototype.getSum = function(a, b) {
    return this.a + this.b;
}

let num2 = new Num(2, 5);
num2.getSum();
console.log(num2.getSum());

// ----------------------------

class Numbers {
    constructor(name, email) {
        // тут пишется js код
        this.name = name,
        this.email = email,
        this.name = 'My name is  ' + this.name
    }
    // доступен только классу, но не его экземплярам!
    static getCons() {
        console.log('I am a static');
    }
    // методы. этот метод только к этому конструктору
    getInfo() {
        return this.name + " " + this.email
    }
}

let n = new Numbers('Eva', 'eva@g.com');
n.getInfo();
console.log(n);
console.log(n.getInfo());

console.log(Numbers.getCons());

// 
class Human{
    constructor(name, surname, age) {
        this.name = name,
        this.surname = surname,
        this.age = age
    }
    getFullName() {
        return this.name + ' ' + this.surname
    }
    getFullInfo() {
        for (let key in this) {
            console.log(this[key])
        }
    }
    getFullInfo2() {
        let str = '';
        for (let key in this) {
            str += key + ': ' + this[key] + ', '
        }
        return str
    }
}

let hum = new Human('Anna', 'Amelina', 25);
// console.log(hum.getFullName());
console.log(hum.getFullInfo());
console.log(hum.getFullInfo2());


class User extends Human {
    constructor(email, pass, name, surname, age) {
        // все от Human
        super(name, surname, age)
        this.email = email,
        this.pass = pass
    }
}

let user = new User('1@23', '456666',  'Anna', 'Amelina', 25);
console.log(user);

