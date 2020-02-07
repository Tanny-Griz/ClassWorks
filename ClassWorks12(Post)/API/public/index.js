// API REST 
// let a = fetch('http://api-f-19-2.herokuapp.com/')
// a.then(res => res.json()).then(r => console.log(r))


// в а промис, массив юзеров, автоматом распарсит
axios.get('http://localhost:3000/users').then(res => {
    document.body.innerHTML = ''
    for (let { name } of res.data) {
        const el = document.createElement('h2')
        el.innerText = name;
        document.body.appendChild(el)
    }
    // document.body.innerText = `${JSON.stringify(res.data)}`

})

// передеаем тело { name: 'Anna' }
// в async () - параметром передваетя сам обьект и подставляется в аксиусе 
const createUsers = async () => {
    // асинхронно, сначала создать
    await axios.post('http://localhost:3000/users', { name: 'Anna' })
    // а потом добавить
    const users = await axios.get('http://localhost:3000/users')
        //чистим бади и переотрисовываем
        document.body.innerHTML = ''
        for (let { name } of users.data) {
            const el = document.createElement('h2')
            el.innerText = name;
            document.body.appendChild(el)
        }
        console.log(users)

}

const deleteUsers = async () => {
    await axios.delete('http://localhost:3000/users/1')
    const users = await axios.get('http://localhost:3000/users')
        document.body.innerHTML = ''
        for (let { name } of users.data) {
            const el = document.createElement('h2')
            el.innerText = name;
            document.body.appendChild(el)
        }
}

console.log('asd')