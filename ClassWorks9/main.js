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
    name: 'Abs',
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
console.log('-------arr-------')
let arr = ['Tim', 'Pol', 'Ron', 'Bob', 'Jhon', "Kol"]
console.log(arr)

// ----------Методы изменения---------------
console.log('-------push в конец-------')
arr.push('Anna')
console.log(arr)

console.log('-------shift минус первый-------')
arr.shift() // - первый 'Tim'
console.log(arr)

console.log('-------unshift добовил в начало-------')
arr.unshift('Geo')
console.log(arr)

console.log('------pop удалил последний-------')
arr.pop()
console.log(arr)
console.log('------end pop push shift unshift -------')

console.log('----------splice------------')
// ДОБАВЛЯЕТ УДАЛЯЕТ эл-ты из массива
arr.splice(1, 2) // берет первый включительно и удаляет два
console.log(arr)



console.log('----------sort------------')
let numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

// ------- Методы доступа---------
// Эти методы не изменяют массив, а просто возвращают его в ином представлении
console.log('----------slice------------')
// содержащит копию части исходного массива
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2, 4)); // ["camel", "duck"]
console.log(animals)

console.log('----------join------------')
// в строку по разделителю ;
animals.join(' ; ')
console.log(animals.join(' ; '))

// Array.prototype - Позволяет добавлять свойства ко всем объектам массива.

// --------- Методы обхода ----------


console.log('----------entries------------')
// Возвращает новый объект итератора массива Array Iterator, содержащий пары ключ / значение для каждого индекса в массиве.




