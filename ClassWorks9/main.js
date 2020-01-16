let human = {
    name: 'Anna'
}

let cat = {
    name: 'Tom'
}

function foo() {
    return this.name
}

let foo1 = foo.bind(human);
console.log(foo1());

let foo2 = foo.bind(cat);
console.log(foo2());


console.log(foo.call(human));
console.log(foo.call(cat));

function roo(pref) {
    return pref + this.name
}

console.log(roo.call(human, 'I am ')); // перв парам это this

let obj = {
    name: 'Kopi',
    gender: 'male'
}

let obj1 = {...obj}

let obj2 = Object.assign({}, obj) // все свойства obj из в пустой {}
let obj3 = Object.assign({}, obj, {age: 23}) // все свойства obj из в пустой {}  и новое свойство
let obj4 = Object.assign({...obj})
console.log(obj)
console.log(obj2)

Object.keys(obj1)
// Object.value(obj1)
Object.entries(obj1) // возвр ключ значение строкой?

console.log(Object.keys(obj1))

for (let [key, value] of Object.entries(obj1)) {
    console.log(key, value)
}

for (let value of Object.entries(obj1)) {
    console.log(value.join(' : ')) // всегда вернет строку
}

// массивы

// Array.prototype.метод
 
let arr = ['Tim', 'Pol', 'Ron']
arr.push('Anna')
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift('Geo')
console.log(arr)
arr.pop()
console.log(arr)

arr.splice(1, 2) // берет первый включая и удаляет два
arr.slice()
arr.join(' ; ')





