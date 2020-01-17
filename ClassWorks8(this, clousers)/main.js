//  this

function foo() {
    return this.name; // (3)
}

// присвоение переменной рез-тата вызова ф-ции
let fooResult = foo();

let obj = {
    name: 'Anna',
    fooResult: foo, // берет this.name (2)
}
console.log(fooResult); // пусто
console.log(obj.fooResult()); //'Anna' (1)

obj.name = 'Eva'
console.log(obj.fooResult()); //'Eva', переприсвоили name
obj.fooResult = '123'
console.log(obj.fooResult); // 123, теперь это не функция

//---------------------------------------------------------
let sum = () => {
    let a = 1;
    let b = 1;
    return() => a++ + b++
}

let s1 = sum();
console.log(s1()); // 2
console.log(s1()); // 4
console.log(s1()); // 6

console.log('-----------------------------');

let mul = (z) => {
    let a = 1;
    return() => a++ + z
}

let m1 = mul(2);
console.log(m1()); // 1+2  3
console.log(m1()); // 2+2  4
console.log(m1()); // 3+2  5

console.log('-----------------------------');


let clouser= () => {
    let count = 0;
    return() => ++count;
}

let counter = clouser();
console.log(counter());
console.log(counter());
console.log(counter());

console.log('----------------------------')


let a = 1;
let b = 2;
let c = 3;
const foo2 = () => {
    ++a;
    ++b;
    ++c;
    // return a + ' ' + b + ' ' + c // 2 3 4 (1)
    // return {a, b, c} // {a: 2, b: 3, c: 4}
    return [a, b, c] // [2, 3, 4]
}
console.log(foo2()); // 

console.log('----------------------------')

const returnName = () => {
    let str = '';
    return(name) => {
        if (str.length) {
            str += `, ${name}`
            return str
        }
        str += `${name}`
        return str
    }
}

let g = returnName();
console.log(g('Anna')); // Anna
console.log(g('Eva')); // Anna , Eva
console.log(g('Inna')); // Anna , Eva , Inna

// генерим юзеров
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
        // если ввели не число, то id = след по счету id
        if (typeof id !== 'number') {
            this.id = ++User.nextId
            return
        }
        // если оно уже имеется у другого юзера, то id = след по счету id
        if (User.nextId > id) {
            this.id = ++User.nextId
            return
        }
        // если любое другое, не равное кому-либо, либо больше, то берем это число
        this.id = id;
        // если мы написали id 123, то статическое сво-во должно быть равным ему, что бы потом не было дублирования id
        User.nextId = id;
        return this.id;
    }
}

// перезаписали arrOfUsers, каждый экземпляр наследует класс User + с уник id
for (let index in arrOfUsers) {
    let user = arrOfUsers[index];
    arrOfUsers[index] = new User(user);
}

console.log(arrOfUsers[1].totalAmount); //1553.51
console.log(arrOfUsers[1].fullName);



