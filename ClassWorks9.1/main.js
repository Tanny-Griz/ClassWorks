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

// filter
const filterArr = [];
condidateArr.filter((cond, index) => {
    // если тру, добавит в новый массив
    return cond.isActive
})

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

// map
condidateArr.map((cond, index) => {
    // return console.log({id: cond._id, status: cond.isActive})
})

condidateArr.map((cond, index) => {
    // return console.log({id: cond._id, friends: cond.friends}) 
})

// find для одного человека
condidateArr.find(cond => cond._id === '5e216bc9f51c08c39c3ed006')
condidateArr.find(cond => {
    //новому все св-ва конда
    let newCond = {...cond}
    //убир доллар и меняем запят на точку, в строке, добавим +
    newCond.balance = +newCond.balance.slice(1).replace(',', '')
    console.log(newCond.balance)
    return (!newCond.isActive && newCond.balance > 1000)
})

// findIndex
let result = condidateArr.findIndex(cond => {
    let newCond = {...cond}
    newCond.balance = +newCond.balance.slice(1).replace(',', '')
    // console.log(newCond.balance)
    return (!newCond.isActive && newCond.balance > 100000)
})

console.log(result >= 0)
//

const filterArr2 = condidateArr.filter((cond, index) => {
    // если тру, добавит в новый массив
    let newCond = {...cond}
    newCond.balance = +newCond.balance.slice(1).replace(',', '')
    if (newCond.balance > 1500){
        return true
    }
    return false
})
let u = filterArr2.map(cond => {
    
    // console.log(cond.balance)
    return {balance: cond.balance}
})

console.log(u)

let state = condidateArr.map(cond => {
    // если мы только выводим но не меняем свойства, то можно не созд переменную. если меняем (присваиваем чему то), то тогда обязательно в новую переменную!
    let newCond = {...cond}
    return {id: newCond._id, state: newCond.address.split(',')[2].trim()}
})

console.log(state)