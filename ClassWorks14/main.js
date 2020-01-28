// Делегирование, всплытие
// let btnElem = document.getElementById('btn')

// function handle() {
//     alert('123456789')
// }

// // можно повесить много событий
// btnElem.onclick = handle

// btnElem.addEventListener('click', handle) // передаем ссылку (не обьект(функцию))

// // console.dir(btnElem)

// // удалить листенер
// btnElem.addEventListener('click', function() { // при такой записи листенер не удалить
//     alert("1111")
// }) 

// function a() {
//     alert('22222')
// }

const parent = document.querySelector('.parent')

parent.addEventListener('click', function() {
    console.dir(this)
})

parent.addEventListener('click', function(e) {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    console.dir(this)
}, false)

