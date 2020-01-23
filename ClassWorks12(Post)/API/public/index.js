// API REST 
// let a = fetch('http://api-f-19-2.herokuapp.com/')
// a.then(res => res.json()).then(r => console.log(r))

axios.get('http://localhost:3000/users').then(res => {
    console.log(res)
})

console.log('asd')