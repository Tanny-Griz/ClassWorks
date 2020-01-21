// setTimeout(() => console.log(1), 1000)
// let newDate = new Date().getTime()
// let obj = {
//     name: 'Anna',
//     getName: function() {
//         return this
//     }
// }
 
// setTimeout(()=> {
//     console.log(obj.getName())
// }, 2000)
// console.log(obj.getName())


// setTimeout(()=> {
//     newDate = (new Date().getTime() - newDate) / 1000
//     console.log('Time delay: ', newDate)
// }, 2000)


// setTimeout(()=> {
//     let h = new Date().getHours()
//     let m = new Date().getMinutes()
//     let s = new Date().getSeconds()
//     console.clear()
//     console.log(`${h} : ${m} : ${s}`)
// }, 1000)

console.log('----------Promise------------')
// Promise

// throw new Error('Msg') Ошибка

let a = 5
try {
    a = a + 5
    // throw new Error('Msg')
} catch(e) {
    console.log(e)
} finally {
    console.log('finaly')
}



let prom = new Promise((reselve, reject)=> {
    setTimeout(() => reselve('works'), 4000)

})
console.log(prom)
prom.then(res => console.log(res))
console.log(prom)