// setTimeout всегда отработает последним, после выполнения call stack
// промисы тоже после всего скрипта
// однопоточный
// асинхр ф-ю не можем выполн отдельно пока выполняем другой код 
// все асинхр ф-ю после полного прочтения js
// даже если не указываем время, а хотим сразу
// Промисы это отдельный стэк
// Сначала setTimeout и setInterval потом отраб Promise

let that = this // setTimeout не понимает this, а обращ к this как к переменной that (КОСТЫЛЬ)


setTimeout(() => console.log(1), 1000) // 1 через 1 сек

let newDate = new Date().getTime()
setTimeout(() => {
    // первое время, потом на момент setTimeout из нового времени вычесть то что было и посм сколько будет
    newDate = (new Date().getTime() - newDate) / 1000 
    console.log('Time delay: ', newDate) // 2.002 сек
}, 2000)


let obj = {
    name: 'Anna',
    getName: function () {
        return this
    }
}

setTimeout(() => {
    console.log(obj.getName()) // через 2 сек вернет обьект
}, 2000)

let count = 0
let timeout = setInterval(() => {
    if (count > 3) {
        clearInterval(timeout)
    }
    console.log(count++)
}, 1000);


let countTwo = 0
countTwo = countTwo + 1
countTwo = countTwo + 2
setTimeout(()=> {
    console.log('Time: ', countTwo) // будет не 3, а выполнится сначала 13, и тут 13!
})
countTwo = countTwo + 10 // 13
console.log(countTwo)

setTimeout(() => {
    // из асинхронщины в call stack подкинет for и будет ждать выполнения
    for (let i = 0; i < 10000; i++) {
        let a = Math.random * i
    }
    console.log('first') 
})

setTimeout(() => {
    console.log('second')
}, 5)

setTimeout(() => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    // console.clear()
    console.log(`${h} : ${m} : ${s}`)
}, 1000)

console.log('----------Promise------------')
// Promise

// throw new Error('Msg') Ошибка

let a = 5
try {
    a = a + 5
    // throw new Error('Msg')
} catch (e) {
    console.log(e)
} finally {
    console.log('finaly')
}



let prom = new Promise((reselve, reject) => {
    setTimeout(() => reselve('works'), 4000)

})
console.log(prom)
prom.then(res => console.log(res))
console.log(prom)