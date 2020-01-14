//  this

function foo() {
    return this.name;
}

let fooResult = foo();

let obj = {
    name: 'Anna',
    fooResult: foo,
}

console.log(fooResult);
console.log(obj.fooResult());

function sum() {
    let a = 1;
    let b = 3;
    return() => a+b
}

let clouser= () => {
    let count = 0;
    return() => ++count;
}

let counter = clouser();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log('----------------------------')


let a=1;
let b=2;
let c=3;
const foo2 = () => {
    ++a;
    ++b;
    ++c;
    return {a,b,c}
}
console.log(foo2());
console.log(foo2());
console.log(foo2());

const returnName = () => {
    let str = '';

    return(name) => {
        if (str.length) {
            str += ` , ${name}`
            return str
        }
        str += `${name}`
        return str
    }
}

let g = returnName()
console.log(g('Anna'));
console.log(g('Eva'));
console.log(g('Inna'));

// console.log(returnName('Anna'));


const arrOfUsers = [];
for (let i = 0; i < 10; i++) {
    let fakeData = faker.helpers.createCard()
    arrOfUsers.push(fakeData)
}

console.log(arrOfUsers);

class User {
    constructor(user) {
        this.id = ++User.nextId;
        Object.assign(this, user)
    }
    static nextId = 0

    get fullName() {
        return 'My name is ' + this.name
    }
    get totalAmount() {
        return this.accountHistory.reduce((counter, item) => {
            return counter + +item.amount
        }, 0)
    }
    set newId(id) {
        if (typeof id !== 'number') {
            this.id = ++User.nextId
            return
        }
        if (User.nextId > id) {
            this.id = ++User.nextId
            return
        }
        this.id = id;
        User.nextId = id;
        return this.id;
    }
}
console.log(arrOfUsers[1].newId = 123);
console.log(arrOfUsers[1].newId);

for (let index in arrOfUsers) {
    let user = arrOfUsers[index]
    arrOfUsers[index] = new User(user);
}

// console.log(arrOfUsers[1].totalAmount);

