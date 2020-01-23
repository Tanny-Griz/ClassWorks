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
    // console.log(count++)
}, 1000);


let countTwo = 0
countTwo = countTwo + 1
countTwo = countTwo + 2
setTimeout(() => {
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
// resolve, reject - параметры-функции
// асинхронные операции это таймер, ajax 
// latentflip.com - Event Loop

// внутрь промиса асинхронную операцию, которую нужно дождаться
// 1
let newProm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Works');
    }, 3000)
});
// 1. на данном этапе в промисе статус {<pending>}, promiseValue: "undefined"
// 1.2. затем статус {<resolved>: "a = 99"} <- и promiseValue
// дождались Promise и выполнили .then
// 1.3.
// в res лежит то что в resolve('Works');
newProm.then((res) => {
    console.log(res)
})

// throw new Error('Msg') Ошибка

// 2
// пишем функцию
function time2sec() {
    console.log('2 sec')
}
// передаем нашу функцию в setTimeout
setTimeout(time2sec, 2000);

// 3
let a = 5
try {
    a = a + 5
    throw new Error('Msg')
} catch (e) {
    console.log(e)
} finally {
    console.log('finaly')
}
console.log(a)
// prom.then(res => console.log(res))

// 4
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        let result = ~~(Math.random() * 10)
        if (result > 5) {
            resolve([1, 2, 3])
        } else {
            reject([4, 5, 6])
        }
    }, 500);
})
prom
    .then(res => console.log('Resolve, ', res))
    .catch(rej => console.log('Reject', rej))

let foo = async () => {
    let a = 5
    // ждем массив от prom
    // сьесть ошибку (что б не светилась красным)
    try {
        let arr = await prom()
        for (let val of arr) {
            console.log(val + a)
        }
    } catch (e) { // в err наш reject 
        console.log('error')
    }
}
foo()

console.log('--------------------------------')
// Создание промиса
// 1 промис
let per = 1
function countOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(per = per + 1); // 2
        }, 3000)
    });
}
// 2 промис
function countSix() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(per = per * 3); // 6
        }, 3000)
    });
}
// 3 промис
function countTen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(per = per + 4); // 10
        }, 3000)
    });
}

let sum = () => {
    // вызыв 1й промис, его ответ перед во 2, а его отв в 3й, и рез выводим в консоль
    countOne().then(val => countSix()).then(val => countTen()).then(res => console.log(res))
}
sum()


//---------------text-----------------'

async function textMy() {
    let str = ''
    function textOne() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(str += 'im first, '); // 2
            }, 2000)
        });
    }

    function textTwo() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(str += 'im second, '); // 6
            }, 0)
        });
    }

    function textThree() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(str += 'im third'); // 10
            }, 0)
        });
    }
    await textOne();
    await textTwo();
    let result = await textThree();
    console.log([result])
}

textMy()