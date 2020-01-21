console.log('----------forEach------------')
// Вызывает функцию для каждого элемента в массиве


condidateArr.forEach(item => {
    item.registered = item.registered.split(' ')[0]
})

condidateArr.forEach(cond => {
    // console.log(cond)
})

condidateArr.forEach(cond => {
    // console.log(cond.isActive)
})

condidateArr.forEach((cond, index) => {
    // console.log(index + " : " + cond.isActive)
})

condidateArr.forEach((cond, index) => {
    if (cond.isActive) {
        // если тру, то вывести имя
        // console.log(index + " : " + cond.name)
    }
})

console.log('----------filter------------')
// Создаёт новый массив со всеми элементами этого массива, для которых функция фильтрации возвращает true.

const filterArr = condidateArr.filter((cond, index) => {
    // если тру, добавит в новый массив
    return cond.isActive
})
// console.log(filterArr)
// console.log(condidateArr)

// свой findindex
Array.prototype.mySomeMethod = function (callback) {
    let a = []
    for (let index in this) {
        const callBackResult = callback(this[index], index);
        if(callBackResult === true) {
            a.push(this[index])
        }
    }
    return a
}

console.log('----------map()------------')
// Создаёт новый массив с результатами вызова указанной функции на каждом элементе данного массива.

let mapArr = condidateArr.map((cond, index) => {
    return {id: cond._id, status: cond.isActive}
})
console.log(mapArr)

let mapArr2 = condidateArr.map((cond, index) => {
    return {id: cond._id, friends: cond.friends}
})
console.log(mapArr2)

console.log('----------find------------')
// для одного человека
condidateArr.find(cond => cond._id === '5e216bc9f51c08c39c3ed006')
condidateArr.find(cond => {
    //новому все св-ва конда
    let newCond = {...cond}
    //убир доллар и меняем запят на точку, в строке, добавим +
    newCond.balance = +newCond.balance.slice(1).replace(',', '')
    console.log(newCond.balance)
    return (!newCond.isActive && newCond.balance > 1000)
})

console.log('----------findIndex------------')
// Возвращает искомый индекс в массиве, если элемент в массиве удовлетворяет условию проверяющей функции или -1, если такое значение не найдено
let result = condidateArr.findIndex(cond => {
    let newCond = {...cond}
    newCond.balance = +newCond.balance.slice(1).replace(',', '')
    // console.log(newCond.balance)
    return (!newCond.isActive && newCond.balance > 100000)
})

console.log(result >= 0)

const filterArr2 = condidateArr.filter((cond, index) => {
    // если тру, добавит в новый массив
    let newCond = {...cond}
    newCond.balance = +newCond.balance.slice(1).replace(',', '')
    if (newCond.balance > 1500){
        return true
    }
    return false
})
let getBalance = filterArr2.map(cond => {
    return {balance: cond.balance}
})

console.log(getBalance)

let state = condidateArr.map(cond => {
    // если мы только выводим но не меняем свойства, то можно не созд переменную. если меняем (присваиваем чему то), то тогда обязательно в новую переменную!
    let newCond = {...cond}
    return {id: newCond._id, state: newCond.address.split(',')[2].trim()}
})

console.log(state)